//* Array of products
const myProducts = [
    {
        id: 1,
        name: "Invicta Men's Pro Driver",
        image: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        category: "Dress",
    },

    {
        id: 11,
        name: "Invicta Men's pro Driver",
        image: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        category: "Dress",
    },

    {
        id: 2,
        name: "Timex Men's Expedition Scout",
        image: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        category: "Sport",
    },

    {
        id: 3,
        name: "Breitling Superocean Heritage",
        image: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        category: "Luxury",
    },

    {
        id: 4,
        name: "Casio Classic Resin Strap",
        image: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 40,
        category: "Sport",
    },
];

//* Declare variables
const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-input");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".price-range");
const priceValue = document.querySelector(".price-value");

//* show products on the screen
const displayProduct = (filteredProducts) => { //* Accept an array of products
    productContainer.innerHTML = filteredProducts.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <span class="name">${product.name}</span>
            <span class="price">$${product.price}</span>
        </div>
    `).join("");
};
displayProduct(myProducts); //* call functionality and pass array data

//* Search Products
searchInput.addEventListener("keyup", (e) => { //* listen for keyup events
    const value = e.target.value.toLowerCase(); //* transform to lowerCase
    if (value) {
        displayProduct(myProducts.filter(item => item.name.toLowerCase().indexOf(value) !== -1)); 
        //* When the input field isn't empty, filter the products, convert to lowercase, check if searched item exist. 
    } else {
        displayProduct(myProducts);
        //* When the input field is empty, display all products. 
    }
});

//* category filtering
const setCategory = () => {
    const allCategories = myProducts.map(item => item.category); 
    //* create an array of categories

    const categories = ["All", ...allCategories.filter((item, i) => {
        return allCategories.indexOf(item) === i; //* only first occurrence of each category is kept
        //* Remove duplicates and add ALL to reset the filter.
    })];

    categoriesContainer.innerHTML = categories.map(category => //* Loops thru' category array
        `<span class="category">${category}</span>`).join("");
        
        //* click event for each category
    categoriesContainer.addEventListener("click", (e) => {
        const selectedCategory = e.target.textContent;
        selectedCategory === "All" ? displayProduct(myProducts) : displayProduct(myProducts.filter(item => item.category === selectedCategory));
    });
};
setCategory();

//* set minimal & maximum price
const setPrices = () => {
    const priceList = myProducts.map(item => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProduct(myProducts.filter(item => item.price <= e.target.value));
    });
};
setPrices();