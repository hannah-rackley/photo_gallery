//Global variables
var container = document.querySelector('.image-list');
var lightbox = document.querySelector('#lightbox');
var x = document.querySelector('.close');
var left = document.querySelector('.leftArrow');
var right = document.querySelector('.rightArrow');
var index;
var menu = document.querySelector('#menu');
var menuPopup = document.querySelector('.menuPopup');

var images = [
    {url: 'CSS/images/gracie1.jpg'},
    {url: 'CSS/images/gracie2.jpg'},
    {url: 'CSS/images/gracie3.jpg'},
    {url: 'CSS/images/gracie4.jpg'}, 
    {url: 'CSS/images/gracie5.jpg'}, 
    {url: 'CSS/images/gracie6.jpg'}, 
    {url: 'CSS/images/gracie7.jpg'}, 
    {url: 'CSS/images/gracievid.gif'}
]

//Functions
var setSource = function(source) {
    var lightboxImg = document.querySelector('#lightboxImage');
    lightboxImg.setAttribute('src', source);
}
//Modal Functions
var displayModal = function(event) {
    var source = event.target.getAttribute('src');
    index = event.target.getAttribute('data-index');
    lightbox.classList.add('open');
    setSource(source);
}

var closeModal = function(event) {
    if (event.target !== document.querySelector('#lightboxImage') && event.target !== left && event.target !== right) {
        lightbox.classList.remove('open');
    }
}

//Photo Changing Function
var changePhotos = function(event) {
    if (event.target === left) {
        index--;
        if (index < 0) {
            index = (images.length - 1);
        }
    } else if (event.target === right) {
        index++;
        if (index >= images.length) {
            index = 0;
        }
    }
    var source = images[index].url;
    setSource(source);
}

//Menu Functions
var displayMenu = function() {
    menuPopup.classList.add('open');
    menu.classList.add('close');
}

var closeMenu = function(event) {
    if (event.target !== menu) {
       menuPopup.classList.remove('open');
    menu.classList.remove('close'); 
    }
}

//Image List creation
for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var newImage = document.createElement('img');
    newImage.classList.add('imageSize');
    newImage.setAttribute('src', image.url);
    newImage.setAttribute('data-index', i);
    newImage.addEventListener('click', displayModal);

    var item = document.createElement('div');
    item.appendChild(newImage);
    item.classList.add('image');
    container.appendChild(item);
}

//Event Listeners
lightbox.addEventListener('click', closeModal);
left.addEventListener('click', changePhotos);
right.addEventListener('click', changePhotos);
menu.addEventListener('click', displayMenu);
menuPopup.addEventListener('click', closeMenu);
window.addEventListener('click', closeMenu);
window.addEventListener('scroll', closeMenu);

