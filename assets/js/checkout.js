document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const table = document.querySelector(".product-table");
  const totalElement = document.querySelector(".os_row_three span:last-child");

  let total = 0;

  // Clear existing rows except header
  table.innerHTML = "";

  if (cartItems.length === 0) {
    table.innerHTML = `<tr><td colspan="2" class="hero_para">Your cart is empty.</td></tr>`;
  } else {
    cartItems.forEach((item) => {
      const subtotal =
        parseFloat(item.price.replace(/[^\d.]/g, "")) * (item.quantity || 1);
      total += subtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
          <td class="hero_para">${item.name} × ${item.quantity || 1}</td>
          <td class="hero_para">$${subtotal.toFixed(2)}</td>
        `;
      table.appendChild(row);
    });
  }

  totalElement.textContent = `$${total.toFixed(2)}`;
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

//submit order
document
  .getElementById("confirmOrderBtn")
  .addEventListener("click", function () {
    const shippingForm = document.querySelectorAll(".form-box form")[0];
    const billingForm = document.querySelectorAll(".form-box form")[1];

    function extractFormData(form) {
      const inputs = form.querySelectorAll("input, select");
      const data = {};
      inputs.forEach((input) => {
        const label = input.previousElementSibling?.textContent?.trim() || "";
        const key = label.toLowerCase().replace(/[^a-z]+/g, "_"); // generate key like first_name
        data[key] = input.value;
      });
      return data;
    }

    const shippingData = extractFormData(shippingForm);
    const billingData = extractFormData(billingForm);

    // Save to localStorage
    localStorage.setItem("shippingDetails", JSON.stringify(shippingData));
    localStorage.setItem("billingDetails", JSON.stringify(billingData));

    // Redirect to thankyou page
    window.location.href = "thankyou.html";
  });
