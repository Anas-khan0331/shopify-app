(function () {
  // Selectors
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");
  const resultsList = document.getElementById("results-list");
  const modalHeader = document.querySelector(".wishlist-modal-header");
  const modalBody = document.querySelector(".wishlist-modal-body");

  // Global variables to track state
  let lastDetailData = null;

  // Global function to update variant and refresh display
  window.updateVariant = async function (attrName, attrValue) {
    // Update current selections
    currentSelections[attrName.toLowerCase()] = attrValue.toLowerCase();

    // Show loading state but keep existing content
    modalBody.innerHTML =
      '<div style="padding: 0px; text-align: center;">Updating details...</div>';

    try {
      await fetchProductDetails(selectedProduct, currentSelections);
    } catch (error) {
      console.error("Error updating variant:", error);
      // On error, restore the previous display
      if (lastDetailData) {
        displayProductDetails(lastDetailData);
      }
    }
  };

  // API Endpoints
  const searchApiUrl = "https://staging.mobiledirectonline.co.uk/api/products";
  const productDetailApiUrl =
    "https://staging.mobiledirectonline.co.uk/api/products/variant";

  // State Management
  let debounceTimer;
  let selectedProduct = null;
  let currentSelections = {};

  // --- Search Implementation ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.trim();
      clearTimeout(debounceTimer);
      if (value.length > 0) {
        debounceTimer = setTimeout(() => fetchProducts(value), 200);
      } else {
        resultsContainer.classList.add("hidden");
      }
    });
  }

  async function fetchProducts(query) {
    resultsList.innerHTML = '<div class="hero-search__item">Searching...</div>';
    resultsContainer.classList.remove("hidden");

    try {
      const response = await fetch(
        `${searchApiUrl}?query=${encodeURIComponent(query)}`,
      );
      const data = await response.json();
      const products = data?.data?.data || [];
      resultsList.innerHTML = "";

      if (products.length > 0) {
        products.forEach((item) => {
          const btn = document.createElement("button");
          btn.className = "hero-search__item";
          btn.innerHTML = `
            <div style="text-align: left;">
              <span style="font-weight: 600; display: block;">${item.title}</span>
              <small style="color: #666;">${item.brandName || ""} ${item.storage || ""}</small>
            </div>`;
          btn.onclick = () => handleProductClick(item);
          resultsList.appendChild(btn);
        });
      } else {
        resultsList.innerHTML =
          '<div class="hero-search__item">No products found</div>';
      }
    } catch (error) {
      resultsList.innerHTML = `<div class="hero-search__item" style="color: red;">Error: ${error.message}</div>`;
    }
  }

  // --- Selection & Detail Implementation ---
  async function handleProductClick(product) {
    selectedProduct = product;
    resultsContainer.classList.add("hidden");

    // Set initial state from the product object
    currentSelections = {
      storage: (product.storage || "128GB").toLowerCase(),
      network: "unlocked", // Default
      condition: "very good", // Default
    };

    await fetchProductDetails();
  }

  // Global function called by swatch buttons
  window.updateVariant = async function (attrName, attrValue) {
    currentSelections[attrName.toLowerCase()] = attrValue.toLowerCase();
    await fetchProductDetails();
  };

  async function fetchProductDetails() {
    modalBody.innerHTML =
      '<div style="padding: 0px; text-align: center;">Updating details...</div>';

    try {
      const slug =
        selectedProduct.slug ||
        selectedProduct.title.toLowerCase().replace(/\s+/g, "-");

      const response = await fetch(`${productDetailApiUrl}/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attributes: currentSelections }),
      });

      const detailData = await response.json();
      displayProductDetails(detailData);
    } catch (error) {
      modalBody.innerHTML = `<div style="padding: 20px; text-align: center; color: red;">Error: ${error.message}</div>`;
    }
  }

  function displayProductDetails(detailData) {
    // Store the data for potential error recovery
    lastDetailData = detailData;

    // 1. Update Header
    modalHeader.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <button onclick="window.resetToSearch()" style="background: none; border: none; cursor: pointer; padding: 4px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h3 style="margin: 0; flex: 1;">${selectedProduct.title}</h3>
      </div>
      <span class="wishlist-close" onclick="window.resetToSearch()" style="cursor: pointer; font-size: 20px;">✕</span>
    `;

    // Helper function to extract original image URL from Next.js srcset
    function extractImageSrc(mediaUrl) {
      if (!mediaUrl) return "";

      // If it's a srcset, extract the original URL
      if (mediaUrl.includes("srcset=")) {
        const match = mediaUrl.match(/url=([^&]+)/);
        if (match) {
          return decodeURIComponent(match[1]);
        }
      }

      // If it's already a direct URL, return as is
      if (mediaUrl.startsWith("http")) {
        return mediaUrl;
      }

      // If it's a relative path, try to construct full URL
      if (mediaUrl.startsWith("/")) {
        return `https://sell.mobiledirectonline.co.uk${mediaUrl}`;
      }

      return mediaUrl;
    }

    // 2. Build Swatch HTML Dynamically from API attributes
    // Handle the actual API response structure
    let swatchesHtml = "";
    if (
      detailData.data &&
      detailData.data.attributes &&
      detailData.data.attributes.length > 0
    ) {
      swatchesHtml = detailData.data.attributes
        .map((attr) => {
          // Get the current selected value from variant.attributes
          const currentVariantAttr = detailData.data.variant.attributes.find(
            (v) => v.name === attr.name,
          );
          const selectedValue = currentVariantAttr
            ? currentVariantAttr.value
            : attr.selectedValues[0];

          return `
        <div class="swatch-group" style="margin-bottom: 24px;">
          <h4 style="font-size: 15px; margin-bottom: 12px; font-weight: 600;">${attr.name}: 
            <span style="font-weight: 400; color: #666;">${selectedValue}</span>
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            ${attr.values
              .map((val) => {
                const isActive =
                  val.name.toLowerCase() === selectedValue.toLowerCase();
                const activeStyle = isActive
                  ? "border: 2px solid #4f872f; background: #f4f9f1; font-weight: 700;"
                  : "border: 1px solid #ddd; background: white;";

                return `
                <button 
                  onclick="window.updateVariant('${attr.name}', '${val.name}')"
                  style="padding: 14px; border-radius: 12px; cursor: pointer; transition: 0.2s; font-family: inherit; ${activeStyle}">
                  ${val.name}
                </button>
              `;
              })
              .join("")}
          </div>
        </div>
      `;
        })
        .join("");
    }
    // 3. Render Body
    modalBody.innerHTML = `
      <div class="product-details-view" style="padding: 10px 0;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${extractImageSrc(detailData.data?.media || selectedProduct.media || "")}" 
             onerror="this.src='https://sell.mobiledirectonline.co.uk/uploads/productImages/image-1730819347113-274540596.webp'" 
             style="width: 120px; height: auto; margin-bottom: 10px;">
          <div style="font-size: 32px; font-weight: 800; color: #000;">£${detailData.data?.variant?.price || "---"}</div>
        </div>

        ${swatchesHtml}

        <div style="background: #f8f8f8; padding: 16px; border-radius: 16px; margin-top: 10px;">
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; color: #444; line-height: 2;">
            <li style="display: flex; align-items: center; gap: 8px;">↗ Minor signs of wear, no cracks.</li>
            <li style="display: flex; align-items: center; gap: 8px;">↗ Battery health above 80%.</li>
            <li style="display: flex; align-items: center; gap: 8px;">↗ All parts fully functional.</li>
          </ul>
        </div>

        <button style="width: 100%; padding: 18px; background: #4f872f; color: white; border: none; border-radius: 14px; font-size: 16px; font-weight: 700; margin-top: 24px; cursor: pointer;">
          Sell My Device
        </button>
      </div>
    `;
  }

  // --- Reset/Back Logic ---
  window.resetToSearch = function () {
    modalHeader.innerHTML = `<h3>Sell Your Device</h3><span class="wishlist-close" onclick="closeWishlistModal()">✕</span>`;
    modalBody.innerHTML = `<div id="original-search-template">${document.getElementById("original-search-template").innerHTML}</div>`;
    // Re-bind search input after resetting template
    const newInp = document.getElementById("search-input");
    newInp.addEventListener("input", (e) => {
      const value = e.target.value.trim();
      clearTimeout(debounceTimer);
      if (value.length > 0)
        debounceTimer = setTimeout(() => fetchProducts(value), 200);
    });
  };
})();
