document.addEventListener("DOMContentLoaded", function () {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  const qtyInput = document.getElementById("quantity_input");
  const plusBtn = document.getElementById("plus_increment");
  const minusBtn = document.getElementById("plus_decrement");

  // Increase quantity
  plusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let qty = parseInt(qtyInput.value);
    qtyInput.value = qty + 1;
  });

  // Decrease quantity
  minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let qty = parseInt(qtyInput.value);
    if (qty > 1) {
      qtyInput.value = qty - 1;
    }
  });

  if (!product) return;

  // Populate .product_details_section
  document.querySelector("#product-img").src = product.imageOther;
  document.querySelector("#product-name").textContent = product.name;
  document.querySelector("#product-price").textContent = product.price;

  // Populate .product_details_two
  const pdTwoSection = document.querySelector(".product_details_two");

  pdTwoSection.querySelector("#product-description-one").textContent =
    product.description1;
  pdTwoSection.querySelector("#product-description-two").textContent =
    product.description2;

  const tableRows = pdTwoSection.querySelectorAll(
    ".product_details_table tbody tr"
  );
  if (tableRows.length >= 5) {
    tableRows[0].querySelector("td").textContent = product.details.size;
    tableRows[1].querySelector("td").textContent = product.details.skinType;
    tableRows[2].querySelector("td").textContent = product.details.texture;
    tableRows[3].querySelector("td").textContent =
      product.details.keyIngredients;
    tableRows[4].querySelector("td").textContent =
      product.details.fragranceFree;
  }

  // Update image in product_details_two
  const secondImage = pdTwoSection.querySelector("#product-img-two");
  if (secondImage) {
    secondImage.src = product.imageOther;
  }
  // ---------------------------------
  //  related products loop
  const shopContainer2 = document.getElementById("related-products");
  const relatedProduct = products.filter((item) => {
    return item.id >= 12 && item.id <= 15;
  });

  relatedProduct.forEach((product) => {
    const col2 = document.createElement("div");
    col2.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    col2.innerHTML = `
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

    shopContainer2.appendChild(col2);
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".view-product")) {
      const productId = e.target.closest(".view-product").dataset.id;
      const product = products.find((p) => p.id == productId);
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    }
  });
  // ------------------------------------------
  // ✅ redirect to cart page
  document
    .getElementById("add-to-cart")
    .addEventListener("click", function (e) {
      e.preventDefault();

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Avoid duplicates
      const exists = cartItems.find((item) => item.id === product.id);
      if (!exists) {
        const selectedQty = parseInt(qtyInput.value) || 1;
        cartItems.push({ ...product, quantity: selectedQty });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Go to cart page
      window.location.href = "cart.html";
    });

  //wishlist
  document
    .getElementById("add-to-wishlist")
    .addEventListener("click", function (e) {
      e.preventDefault();

      // Get existing wishlist from localStorage, or create a new one
      let wishlistItems =
        JSON.parse(localStorage.getItem("wishlistItems")) || [];

      // Avoid duplicates
      const exists = wishlistItems.find((item) => item.id === product.id);
      if (!exists) {
        wishlistItems.push(product);
      }

      // Save updated wishlist to localStorage
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

      // Redirect to wishlist page
      window.location.href = "wishlist.html";
    });

  // related product
  //going to Cart
  document
    .getElementById("add-to-cart")
    .addEventListener("click", function (e) {
      e.preventDefault();

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const selectedQty = parseInt(qtyInput.value) || 1;

      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += selectedQty; // ✅ Add to existing quantity
      } else {
        cartItems.push({ ...product, quantity: selectedQty });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Update cart count
      updateCartCount();

      // Go to cart page
      window.location.href = "cart.html";
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

        const existingItem = wishlistItems.find(
          (item) => item.id == product.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          wishlistItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

        // ✅ Update the wishlist count in header
        updateWishlistCount();

        window.location.href = "wishlist.html";
      }
    });
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
