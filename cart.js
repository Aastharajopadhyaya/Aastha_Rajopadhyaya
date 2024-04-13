// Initialize an array to store selected products
let selectedProducts = [];

// Define buyNow function
function buyNow(name, price, image) {
  // Store the selected product in the array
  selectedProducts.push({ name: name, price: price });
  // Add event listener to the form
  document.getElementById('pay-now-btn').addEventListener('click', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Calculate total amount
    let totalAmount = selectedProducts.reduce((total, product) => total + product.price, 0);

    // Redirect to the payment page with total amount as URL parameter
    window.location.href = 'payment.html?total=' + totalAmount;
  });
}
