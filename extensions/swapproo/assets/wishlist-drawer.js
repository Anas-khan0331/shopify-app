(function () {
  var wrapper = document.querySelector(".wishlist-modal-wrapper");

  window.openWishlistDrawer = function () {
    wrapper.classList.remove("drawer-closing");
    wrapper.classList.add("drawer-open");
    document.body.style.overflow = "hidden";
  };

  window.closeWishlistDrawer = function () {
    wrapper.classList.remove("drawer-open");
    wrapper.classList.add("drawer-closing");
    document.body.style.overflow = "auto";
  };

  // Close on overlay click (outside the content panel)
  wrapper.addEventListener("click", function (e) {
    if (e.target === wrapper) {
      window.closeWishlistDrawer();
    }
  });
})();
