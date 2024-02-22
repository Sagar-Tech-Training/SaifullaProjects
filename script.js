let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function moveSlide(n) {
    slideIndex += n-1;
    showSlides();
}
// Example dataset
const items = [
    { name: "Starters", category: "option1" },
    { name: "Main-Cource", category: "option2" },
    { name: "Dessert", category: "option1" },
    // Add more items as needed
];

function filterResults() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filterValue = document.getElementById('filter-select').value;
    const resultsContainer = document.getElementById('results-container');
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // Filter items based on search input and selected filter option
    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchInput);
        const matchesFilter = filterValue === 'all' || item.category === filterValue;
        return matchesSearch && matchesFilter;
    });
    
    // Display filtered items
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item.name;
        resultsContainer.appendChild(itemElement);
    });
}

// Optionally, call filterResults on page load or when the search input/filter changes
// filterResults();
document.addEventListener('DOMContentLoaded', () => {
    const foodItems = [
        { name: 'Main-course', price: '199/-onwards', imageUrl: 'about-3.jpg' },
        { name: 'Starters', price: '99/-onwards', imageUrl: 'about-4.jpg' },
        { name: 'Dessert', price: '49/-onwards', imageUrl: 'banner4.jpg' },
        // Add more food items here
    ];

    const foodContainer = document.getElementById('food-container');

    foodItems.forEach(item => {
        const foodElement = document.createElement('div');
        foodElement.classList.add('food-item');
        foodElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price}</div>
        `;
        foodContainer.appendChild(foodElement);
    });
});
document.getElementById('cartBtn').onclick = function() {
    document.getElementById('cartSidebar').style.width = "250px";
};

document.getElementById('closeCartBtn').onclick = function() {
    document.getElementById('cartSidebar').style.width = "0";
};

// Example function to dynamically update the cart
function updateCart(items) {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear current items
    let total = 0;

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById('cartTotal').textContent = `Total: $${total}`;
}

// Example items
const cartItems = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 15 },
    // Add more items as needed
];

// Update cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCart(cartItems);
});
document.getElementById('year').textContent = new Date().getFullYear();

