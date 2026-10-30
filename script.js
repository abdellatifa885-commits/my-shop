// Shop settings: change these two lines
// Phone number in international format, digits only (212 = Morocco, then the number without the first 0)
const WHATSAPP_NUMBER = "212600000000";
const PRICE = 450; // price of one bag, in MAD

const form = document.getElementById("order");
const quantityInput = document.getElementById("quantity");
const totalText = document.getElementById("total");

// Update the total every time the quantity changes
quantityInput.addEventListener("input", () => {
  const quantity = Number(quantityInput.value) || 1;
  totalText.textContent = quantity * PRICE;
});

// When the customer clicks "Order on WhatsApp"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading

  const quantity = Number(quantityInput.value) || 1;
  const name = document.getElementById("name").value.trim();
  const city = document.getElementById("city").value.trim();

  const message =
    `Hello! I want to order:\n` +
    `- Atlas Tote Bag x ${quantity}\n` +
    `- Total: ${quantity * PRICE} MAD (cash on delivery)\n` +
    `Name: ${name}\n` +
    `City: ${city}`;

  // wa.me opens WhatsApp (app or web) with the message already written
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
