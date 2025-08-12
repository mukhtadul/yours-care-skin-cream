const productList = document.getElementById("product-list");
const moreProducts = document.getElementById("more-products");

// First 8 products
const firstEight = products.slice(0, 8);

// Last 8 products
const lastEight = products.slice(8);

// Function to create and append product cards
function renderProductList(productArray, container) {
  productArray.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    col.innerHTML = `
      <div class="product_card_container">
        <div class="product_card_wrapper">
          <div class="product_img_wrap">
            <img src="${product.image}" alt="${product.name}" class="img-fluid" />
          </div>
          <div class="product_info">
            <h4 class="h4_headings">${product.name}</h4>
            <p class="product_price">Price: ${product.price}</p>
          </div>
          <div class="product_icons_wrap">
              <a href="product-details.html"  data-id="${product.id}" class="view-product">
                <span><i class="fa-regular fa-eye"></i></span>
              </a>
              <a href="#" class="wishlist-icon add-to-wishlist" data-id="${product.id}">
                <span><i class="fa-regular fa-heart"></i></span>
              </a>
              <a href="#" class="cart-icon add-to-cart" data-id="${product.id}">
                <span><i class="fa-solid fa-cart-shopping"></i></span>
              </a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// Render products in both sections
renderProductList(firstEight, productList);
renderProductList(lastEight, moreProducts);

// rediect product details page
document.addEventListener("click", function (e) {
  if (e.target.closest(".view-product")) {
    const productId = e.target.closest(".view-product").dataset.id;
    const product = products.find((p) => p.id == productId);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  }
});

//going to Cart
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const productId = this.getAttribute("data-id");
    const product = products.find((p) => p.id == productId);

    if (product) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existingItem = cartItems.find((item) => item.id == product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartCount();
      window.location.href = "cart.html";
    }
  });
});

//going to wishlist
document.querySelectorAll(".add-to-wishlist").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const productId = this.getAttribute("data-id");
    const product = products.find((p) => p.id == productId);

    if (product) {
      let wishlistItems =
        JSON.parse(localStorage.getItem("wishlistItems")) || [];

      const existingItem = wishlistItems.find((item) => item.id == product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        wishlistItems.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

      // ✅ Update the wishlist count in header
      updateWishlistCount();

      // window.location.href = "wishlist.html";
    }
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
