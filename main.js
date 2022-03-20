const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let amountOfImagesInGallery = 5
let galleryImages = [];
/* Looping through images */
// load images into gallryImages
for (let images = 1; images <= amountOfImagesInGallery; images++) {
    galleryImages.push(`images/pic${images}.jpg`)
}
console.log(galleryImages)
// Load images to NavBar
for (let images = 0; images <= amountOfImagesInGallery; images++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', galleryImages[images]);
    newImage.setAttribute('size', 'auto');
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
