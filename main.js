//Global variables
var container = $('.image-list');
var lightbox = $('.lightbox');
var left = $('.left-arrow');
var right = $('.right-arrow');
var menu = $('#menu');
var menuPopup = $('.menu-popup');
var lightboxImg = $('.lightbox-image');
var lightboxCaption = $('.lightbox-caption');

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
    var newImage = $('<img>');
    newImage.attr('src', image.url);
    newImage.addClass('imageSize');

    var caption = $('<p>');
    caption.text(image.caption);
    caption.addClass('caption');

    var item = $('<div>');
    item.addClass('item');
    item.append(newImage);
    item.append(caption);

    container.append(item);

    //Lightbox display function
    var displayLightbox = function() {
        currentIndex = i;
        lightbox.addClass('open');
        setSource(i);
        setCaption(i);
    }
    item.on('click', displayLightbox);
});

var setSource = function(index) {
    var source = images[index].url
    lightboxImg.attr('src', source);
}

var setCaption = function(index) {
    var caption = images[index].caption;
    lightboxCaption.text(caption);
}
//Menu Functions
var displayMenu = function() {
    menuPopup.addClass('open');
    menu.addClass('close');
}

var closeMenu = function(event) {
    if (event.target !== menu[0] || event === 'scroll') {
        menuPopup.removeClass('open');
        menu.removeClass('close');  
    }
}

//Lightbox Function
var closeLightbox = function(event) {
    if (event.target !== lightboxCaption[0] && event.target !== lightboxImg[0] && event.target !== left[0] && event.target !== right[0]) {
        lightbox.removeClass('open');
    }
}

//Photo Changing Functions
var changePhotoRight = function(event) {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    setSource(currentIndex);
    setCaption(currentIndex);
}

var changePhotoLeft = function(event) {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = (images.length - 1);
    }
    setSource(currentIndex);
    setCaption(currentIndex);
}

var keyDown = function(event) {
    event.preventDefault();
    if (event.key === "ArrowRight") {
        changePhotoRight(event);
    } else if (event.key === "ArrowLeft") {
        changePhotoLeft(event);
    } else if (event.key === "Escape") {
        closeLightbox(event);
    }
}

menu.on('click', displayMenu);
menuPopup.on('click', closeMenu);
$(window).on('click', closeMenu);
$(window).on('scroll', closeMenu);
$(window).on('keydown', keyDown);
left.on('click', changePhotoLeft);
right.on('click', changePhotoRight);
lightbox.on('click', closeLightbox);


