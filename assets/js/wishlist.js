document.addEventListener("DOMContentLoaded", function () {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
  const tbody = document.querySelector("#wishlist-table tbody");
  tbody.innerHTML = "";

  wishlistItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <div class="d-flex align-items-center justify-content-start gap-3">
          <div class="img_wrap_tb">
            <img src="${item.image}" class="table_product_img" alt="${item.name}" />
          </div>
          <div class="table_product_name h4_headings">${item.name}</div>
        </div>
      </td>
      <td><p class="hero_para">${item.price}</p></td>
      <td class="wishlist_remove_wrap">
        <a href="#" class="trash_table"><i class="fa-solid fa-trash"></i></a>
      </td>
      <td>
        <div class="wishtocart_wrap">
          <a href="#" class="theme_btn">Add To Cart</a>
        </div>
      </td>
    `;

    // ✅ Add event listener for "Add To Cart"
    row.querySelector(".theme_btn").addEventListener("click", function (e) {
      e.preventDefault();

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const exists = cartItems.find((cartItem) => cartItem.id === item.id);
      if (!exists) {
        cartItems.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Optional: remove from wishlist
      const updatedWishlist = wishlistItems.filter(
        (wishItem) => wishItem.id !== item.id
      );
      localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));

      // ✅ Redirect to cart.html
      window.location.href = "cart.html";
    });

    // ✅ Add event listener for remove wishlist
    row.querySelector(".trash_table").addEventListener("click", function (e) {
      e.preventDefault();
      const updatedWishlist = wishlistItems.filter(
        (wishItem) => wishItem.id !== item.id
      );
      localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
      row.remove();
      updateWishlistCount();
    });

    tbody.appendChild(row);
  });
});

//update wishlist count function
function updateWishlistCount() {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
  const count = wishlistItems.length;

  // Get all .count_item elements and update only the wishlist one
  const countElements = document.querySelectorAll(".count_item");
  if (countElements.length > 0) {
    countElements[0].textContent = count; // Wishlist is the first icon
  }
}

//update cart count function
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // ✅ Sum total quantity of all items
  const count = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const countElements = document.querySelectorAll(
    ".count_item.cart_count_item"
  );
  if (countElements.length > 0) {
    countElements[0].textContent = count;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateWishlistCount();
  updateCartCount();
});
