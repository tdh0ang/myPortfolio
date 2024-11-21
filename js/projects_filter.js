document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const categories = document.querySelectorAll(".category");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Debugging: Check if the button is clicked
            console.log(`Button clicked: ${button.getAttribute('data-category')}`);

            const category = button.getAttribute("data-category");

            // Debugging: Check category to be filtered
            console.log(`Filtering category: ${category}`);

            // Remove 'active' class from all buttons and add it to the clicked one
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            categories.forEach(cat => {
                // Show or hide categories based on the filter
                if (category === "all" || cat.getAttribute("data-category") === category) {
                    cat.style.display = "block"; // Show matching category
                } else {
                    cat.style.display = "none"; // Hide non-matching categories
                }
            });
        });
    });
});
