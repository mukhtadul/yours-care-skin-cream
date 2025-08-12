document.addEventListener("DOMContentLoaded", function () {
  const shipping = JSON.parse(localStorage.getItem("shippingDetails")) || {};
  const billing = JSON.parse(localStorage.getItem("billingDetails")) || {};
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  function renderDetails(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    for (const key in data) {
      const formattedKey = key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const value = data[key] || "-";
      const li = document.createElement("li");
      li.textContent = `${formattedKey}: ${value}`;
      container.appendChild(li);
    }
  }

  renderDetails("shippingInfo", shipping);
  renderDetails("billingInfo", billing);

  // Show cart items
  const tableBody = document.getElementById("orderSummaryTable");
  const totalElement = document.getElementById("orderTotal");
  let total = 0;

  tableBody.innerHTML = "";

  if (cartItems.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="2">No items in your cart.</td></tr>`;
  } else {
    cartItems.forEach((item) => {
      const quantity = item.quantity || 1;
      const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
      const subtotal = quantity * price;
      total += subtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name} × ${quantity}</td>
        <td>$${subtotal.toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  totalElement.textContent = `$${total.toFixed(2)}`;

  //update wishlist count function
  function updateWishlistCount() {
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const count = wishlistItems.length;

    // Get all .count_item elements and update only the wishlist one
    const countElements = document.querySelectorAll(".count_item");
    if (countElements.length > 0) {
      countElements[0].textContent = count; // Wishlist is the first icon
    }
  }

  updateWishlistCount();
  // ✅ Clear cart AFTER displaying order summary
  localStorage.removeItem("cartItems");
});
