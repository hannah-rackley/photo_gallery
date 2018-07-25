//Global variables
var container = document.querySelector('.image-list');
var lightbox = document.querySelector('.lightbox');
var left = document.querySelector('.left-arrow');
var right = document.querySelector('.right-arrow');
var menu = document.querySelector('#menu');
var menuPopup = document.querySelector('.menu-popup');

var images = [
    {url: 'images/gracie1.jpg'},
    {url: 'images/gracie2.jpg'},
    {url: 'images/gracie3.jpg'},
    {url: 'images/gracie4.jpg'}, 
    {url: 'images/gracie5.jpg'}, 
    {url: 'images/gracie6.jpg'}, 
    {url: 'images/gracie7.jpg'}, 
    {url: 'images/gracievid.gif'}
]
var currentIndex;

//Image List creation
for (var i = 0; i < images.length; i++) {
    (function(){
        var image = images[i];
        var index = i;
        var newImage = document.createElement('img');
        newImage.classList.add('imageSize');
        newImage.setAttribute('src', image.url);
    
        var item = document.createElement('div');
        item.appendChild(newImage);
        item.classList.add('image');
        container.appendChild(item);

        //Modal Functions
        var displayModal = function(event) {
            var source = event.target.getAttribute('src');
            currentIndex = index;
            lightbox.classList.add('open');
            setSource(source);
        }
        newImage.addEventListener('click', displayModal);
    })();
}

//Functions
var setSource = function(source) {
    var lightboxImg = document.querySelector('.lightbox-image');
    lightboxImg.setAttribute('src', source);
}
//Photo Changing Function
var changePhotos = function(event) {
    if (event.target === left) {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = (images.length - 1);
        }
    } else if (event.target === right) {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }
    var source = images[currentIndex].url;
    setSource(source);
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
var closeModal = function(event) {
    if (event.target !== document.querySelector('#lightbox-image') && event.target !== left && event.target !== right) {
        lightbox.classList.remove('open');
    }
}
menu.addEventListener('click', displayMenu);
menuPopup.addEventListener('click', closeMenu);
window.addEventListener('click', closeMenu);
window.addEventListener('scroll', closeMenu);
left.addEventListener('click', changePhotos);
right.addEventListener('click', changePhotos);
lightbox.addEventListener('click', closeModal);


