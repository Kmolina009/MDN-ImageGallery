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
// Load images to NavBar
for (let images = 0; images < amountOfImagesInGallery; images++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', galleryImages[images]);
    newImage.setAttribute('size', 'auto');
    newImage.addEventListener('click',imageSelect);
    thumbBar.appendChild(newImage);
}

// Users should be able to select an image from the navbar
let imageSelection = thumbBar.children;
//  imageSelection.array.forEach(element => {
     
//  });

 function imageSelect(e){
    //  Parse String
    //  http://127.0.0.1:5500/images/pic1.jpg
    // Remove the first 22 characters
    let parsedImageValue = (e.target.src).slice(22)
    return displayedImage.setAttribute('src',parsedImageValue)
 }

//  imageSelection[0].addEventListener('click',imageSelect)
/* Wiring up the Darken/Lighten button */
