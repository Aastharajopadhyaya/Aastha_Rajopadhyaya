function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Validate form data
  let isValid = validateForm();
  
  if (isValid) {
    // Display confirmation message
    document.getElementById('confirmationMessage').textContent = "Message has been delivered. We will definitely notify you.";

    // Reset form
    document.getElementById('contactForm').reset();
  }
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);
