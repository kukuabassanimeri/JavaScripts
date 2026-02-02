const images = [
    { src: 'media/what.jpg', alt: 'Image 1' },
    { src: 'media/meee.jpg', alt: 'Image 4' },
    { src: 'media/me.jpeg', alt: 'Image 2' },
    { src: 'media/Abass.png', alt: 'Image 3' }
   
];

const mainImage = document.getElementById('main-image');
const arrowContainer = document.querySelector('.left-right');
const zoomContainer = document.querySelector('.minus-plus');
const minusArrow = document.querySelector('.fa-minus');
const plusArrow = document.querySelector('.fa-plus');
const leftArrow = document.querySelector('.fa-arrow-left');
const rightArrow = document.querySelector('.fa-arrow-right');


let currentIndex = 0;
let scale = 1; //* Initial zoom scale
const zoomStep = 0.2;
const maxScale = 3;
const minScale = 0.5;

//* Apply zoom based on current scale
function applyZoom() {
    mainImage.style.transform = `scale(${scale})`;
}

//* Update image when navigating
function updateImage() {
    mainImage.src = images[currentIndex].src;
    mainImage.alt = images[currentIndex].alt;
    scale = 1;
    applyZoom(); //* Reset zoom for new image
}

mainImage.addEventListener('click', function () {
    this.classList.toggle('enlarged');
    const isEnlarged = this.classList.contains('enlarged');

    arrowContainer.style.display = isEnlarged ? 'flex' : 'none';
    zoomContainer.style.display = isEnlarged ? 'flex' : 'none';

    if (!isEnlarged) {
        scale = 1;
        applyZoom(); //* Reset zoom when closing
    }

    const currentSrc = mainImage.getAttribute('src').split('/').pop();
    currentIndex = images.findIndex(img => img.src.endsWith(currentSrc));
});

leftArrow.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

rightArrow.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

plusArrow.addEventListener('click', function () {
    if (scale < maxScale) {
        scale += zoomStep;
        applyZoom();
    }
});

minusArrow.addEventListener('click', function () {
    if (scale > minScale) {
        scale -= zoomStep;
        applyZoom();
    }
});
