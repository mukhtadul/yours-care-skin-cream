document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const tbody = document.querySelector("#cart_table tbody");
  tbody.innerHTML = ""; // Clear old rows if any

  cartItems.forEach((item) => {
    const unitPrice = parseFloat(item.price.replace("$", ""));
    const subtotal = (unitPrice * item.quantity).toFixed(2); // Keep 2 decimal places

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
        <td>
          <p class="hero_para">${item.price}</p>
        </td>
        <td class="tproduct_qty">
          <div class="quantity_product">
            <input
              type="number"
              class="form-control"
              style="width: 70px"
              value="${item.quantity}"
              min="1"
              readonly
            />
          </div>
        </td>
        <td>
          <div class="tproduct_price">
            <p class="hero_para">${subtotal}</p>
            <a href="#" id="removeCart" class="trash_table remove-cart" data-id="${item.id}"><i class="fa-solid fa-trash"></i></a>
          </div>
        </td>
      `;
    tbody.appendChild(row);

    // remove cart
    tbody.querySelectorAll(".trash_table").forEach((trashBtn) => {
      trashBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("data-id");

        const updatedCart = cartItems.filter((item) => item.id != id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        window.location.reload();
      });
    });

    //clear cart combine

    document
      .getElementById("clearAllCart")
      .addEventListener("click", function (e) {
        e.preventDefault();

        // Clear only the cartItems from localStorage
        localStorage.removeItem("cartItems");

        // Reload the page to update the cart table
        window.location.reload();
      });
  });

  // Calculate and display total
  const total = cartItems.reduce((sum, item) => {
    const unitPrice = parseFloat(item.price.replace("$", ""));
    return sum + unitPrice * item.quantity;
  }, 0);

  const totalDisplay = document.getElementById("totalAmount");
  if (totalDisplay) {
    totalDisplay.textContent = `$${total.toFixed(2)}`;
  }
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

document.addEventListener("DOMContentLoaded", function () {
  const proceedBtn = document.getElementById("proceedToCheckout");

  proceedBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // You can optionally check if cart has items
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Redirect to checkout page
    window.location.href = "checkout.html";
  });
});
