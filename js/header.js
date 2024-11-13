// header.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html') // Fetch the header content
        .then(response => response.text()) // Convert to text (HTML)
        .then(data => {
            document.getElementById('header-container').innerHTML = data; // Inject into the container
        })
        .catch(error => console.error('Error loading header:', error)); // Handle any fetch errors
});
