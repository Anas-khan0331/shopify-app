import { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchIcon, LoadingSpinner } from "./Icons";

const SEARCH_API_URL = "https://staging.mobiledirectonline.co.uk/api/products";

export default function ProductSearch({ onProductSelect, autoFocus = false }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const debounceRef = useRef(null);
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  }, [autoFocus]);

  const fetchProducts = useCallback(async (searchQuery) => {
    setIsSearching(true);
    setShowResults(true);
    setSearchError(null);
    setResults([]);

    try {
      const response = await fetch(
        `${SEARCH_API_URL}?query=${encodeURIComponent(searchQuery)}`,
      );
      const data = await response.json();
      const products = data?.data?.data || [];
      setResults(products);
    } catch (error) {
      console.error("API Error:", error);
      if (error.message === "Failed to fetch" || error.name === "TypeError") {
        setSearchError("connection");
      } else {
        setSearchError(error.message);
      }
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);
      clearTimeout(debounceRef.current);

      if (value.trim().length > 0) {
        debounceRef.current = setTimeout(() => {
          fetchProducts(value.trim());
        }, 200);
      } else {
        setShowResults(false);
      }
    },
    [fetchProducts],
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div id="product-search-container">
      <form
        id="product-search-form"
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button type="submit" id="product-search-icon">
          {isSearching ? <LoadingSpinner size={20} /> : <SearchIcon />}
        </button>

        {showResults && (
          <div id="product-search-items">
            <div id="product-search-items-wrapper">
              {!isSearching && searchError === "connection" && (
                <div
                  id="product-search-item"
                  style={{
                    color: "#ff9800",
                    padding: 20,
                  }}
                >
                  Connection error. Please check your internet.
                </div>
              )}

              {/* Other error */}
              {!isSearching && searchError && searchError !== "connection" && (
                <div id="product-search-item" style={{ color: "red" }}>
                  Error: {searchError}
                </div>
              )}
              {/* Results */}
              {!isSearching &&
                !searchError &&
                results.map((item, index) => (
                  <button
                    key={item.productId || index}
                    type="button"
                    id="product-search-item"
                    onClick={() => onProductSelect(item)}
                  >
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 500, display: "block" }}>
                        {item.title}
                      </span>
                    </div>
                  </button>
                ))}

              {/* No results */}
              {!isSearching &&
                !searchError &&
                results.length === 0 &&
                query.trim().length > 0 && (
                  <div id="product-search-item">No products found</div>
                )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

ProductSearch.propTypes = {
  onProductSelect: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};
