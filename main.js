var container = document.querySelector('.image-list');
var lightbox = document.querySelector('#lightbox');
var x = document.querySelector('.close');
var left = document.querySelector('.leftArrow');
var right = document.querySelector('.rightArrow');
var index;

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

var displayModal = function(event) {
    var source = event.target.getAttribute('src');
    index = event.target.getAttribute('data-index');
    lightbox.classList.toggle('open');
    var lightboxImg = document.querySelector('#lightboxImage');
    lightboxImg.setAttribute('src', source);
}

var closeModal = function(event) {
    if (event.target !== document.querySelector('#lightboxImage') && event.target !== left && event.target !== right) {
        lightbox.classList.remove('open');
    }
}

var changePhotosLeft = function() {
    index--;
    if (index < 0) {
        index = (images.length - 1);
    }
    var source = images[index].url;
    var lightboxImg = document.querySelector('#lightboxImage');
    lightboxImg.setAttribute('src', source);
}

var changePhotosRight = function() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    var source = images[index].url;
    var lightboxImg = document.querySelector('#lightboxImage');
    lightboxImg.setAttribute('src', source);
}

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

lightbox.addEventListener('click', closeModal);
left.addEventListener('click', changePhotosLeft);
right.addEventListener('click', changePhotosRight);

