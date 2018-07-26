//Global variables
var container = document.querySelector('.image-list');
var lightbox = document.querySelector('.lightbox');
var left = document.querySelector('.left-arrow');
var right = document.querySelector('.right-arrow');
var menu = document.querySelector('#menu');
var menuPopup = document.querySelector('.menu-popup');

var images = [
    {url: 'images/gracie1.jpg', caption: 'Gracie close-up plus a bunch of extra text to determine if my caption will wrap the text within the image.'},
    {url: 'images/gracie2.jpg', caption: 'Gracie distant stare'},
    {url: 'images/gracie3.jpg', caption: 'Gracie after a bath'},
    {url: 'images/gracie4.jpg', caption: 'Gracie enjoying the sun'}, 
    {url: 'images/gracie5.jpg', caption: 'Gracie with fancy paws'}, 
    {url: 'images/gracie6.jpg', caption: 'Gracie covered in mud'}, 
    {url: 'images/gracie7.jpg', caption: 'Gracie super sassy'}, 
    {url: 'images/gracievid.gif', caption: 'Gracie living life'}
]
var currentIndex;

//Image List creation
images.forEach(function(image, i){
    var newImage = document.createElement('img');
    var caption = document.createElement('p');
    newImage.classList.add('imageSize');
    newImage.setAttribute('src', image.url);
    caption.textContent = image.caption;
    caption.classList.add('caption');
    var item = document.createElement('div');
    item.appendChild(newImage);
    item.appendChild(caption);
    item.classList.add('item');
    container.appendChild(item);

    //Modal display function
    var displayModal = function() {
        currentIndex = i;
        lightbox.classList.add('open');
        setSource(i);
        setCaption(i);
    }
    item.addEventListener('click', displayModal);
});

var setSource = function(index) {
    var lightboxImg = document.querySelector('.lightbox-image');
    var source = images[index].url
    lightboxImg.setAttribute('src', source);
}

var setCaption = function(index) {
    var lightboxCaption = document.querySelector('.lightbox-caption');
    var caption = images[index].caption
    lightboxCaption.textContent = caption;
}
//Menu Functions
var displayMenu = function() {
    menuPopup.classList.add('open');
    menu.classList.add('close');
}

var closeMenu = function(event) {
    if (event.target !== menu || event === 'scroll') {
        menuPopup.classList.remove('open');
        menu.classList.remove('close');  
    }
}

//Modal Function
var closeModal = function(event) {
    if (event.target !== document.querySelector('.lightbox-image') && event.target !== left && event.target !== right) {
        lightbox.classList.remove('open');
    }
}

//Photo Changing Function
var changePhotos = function(event) {
    if (event.target === left || event.key === "ArrowLeft") {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = (images.length - 1);
        }
    } else if (event.target === right || event.key === "ArrowRight") {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }
    setSource(currentIndex);
    setCaption(currentIndex);
}

var keyDown = function(event) {
    //event.preventDefault();
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        changePhotos(event);
    } else if (event.key === "Escape") {
        closeModal(event);
    }
}

menu.addEventListener('click', displayMenu);
menuPopup.addEventListener('click', closeMenu);
window.addEventListener('click', closeMenu);
window.addEventListener('scroll', closeMenu);
window.addEventListener('keydown', keyDown);
left.addEventListener('click', changePhotos);
right.addEventListener('click', changePhotos);
lightbox.addEventListener('click', closeModal);


