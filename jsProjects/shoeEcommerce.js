//* slider scroll functionality
const wrapper = document.querySelector('.slider-wrap');
const menuItems = document.querySelectorAll('.menuItem'); //* selecting all, cos there're multiple menu items

//* product array
const products = [
    {
        id: 1,
        title: 'Air Force',
        price: 119,
        colors: [
            {
                code: 'black',
                img: './nikeStore/air.png',
            },
            {
                code: 'darkblue',
                img: './nikeStore/air2.png',
            },
        ],
    },
    {
        id: 2,
        title: 'Air Jordan',
        price: 149,
        colors: [
            {
                code: 'lightgray',
                img: './nikeStore/jordan.png',
            },
            {
                code: 'green',
                img: './nikeStore/jordan2.png',
            },
        ],
    },
    {
        id: 3,
        title: 'Blazer',
        price: 109,
        colors: [
            {
                code: 'lightgray',
                img: './nikeStore/blazer.png',
            },
            {
                code: 'green',
                img: './nikeStore/blazer2.png',
            },
        ],
    },
    {
        id: 4,
        title: 'Crater',
        price: 129,
        colors: [
            {
                code: 'black',
                img: './nikeStore/crater.png',
            },
            {
                code: 'lightgray',
                img: './nikeStore/crater2.png',
            },
        ],
    },
    {
        id: 5,
        title: 'Hippie',
        price: 99,
        colors: [
            {
                code: 'gray',
                img: './nikeStore/hippie.png',
            },
            {
                code: 'black',
                img: './nikeStore/hippie2.png',
            },
        ],
    },
];

//* choosen product
let choosenProduct = products[0];

const currentProductImage = document.querySelector('.product-image');
const currentProductTitle = document.querySelector('.product-title');
const currentProductPrice = document.querySelector('.product-price');
const currentProductColor = document.querySelectorAll('.color');
const currentProductSize = document.querySelectorAll('.size');

menuItems.forEach(( item, index) => {
    item.addEventListener('click', () => {
        //* change current slide
         //* re-position an element along the x-axis
        wrapper.style.transform = 'translateX(' + (index * -100) + 'vw)'; 
       
        //* change the choosen product
        choosenProduct = products[index];

        //* change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = '$' + choosenProduct.price;
        currentProductImage.src = choosenProduct.colors[0].img;

        //* changing styles for each color
        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

//* add event listener to colors to change the images
currentProductColor.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImage.src = choosenProduct.colors[index].img;
    });
});

//* add click event to each size
currentProductSize.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSize.forEach((size) => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
})