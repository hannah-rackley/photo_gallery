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
    var caption = $('<p>');
    caption.text(image.caption);
    newImage.addClass('imageSize');
    caption.addClass('caption');
    var item = $('<div>');
    item.append(newImage);
    item.append(caption);
    item.addClass('item');
    container.append(item);

    //Modal display function
    var displayModal = function() {
        currentIndex = i;
        lightbox.addClass('open');
        setSource(i);
        setCaption(i);
    }
    item.on('click', displayModal);
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
    if (event.target !== menu || event === 'scroll') {
        menuPopup.removeClass('open');
        menu.removeClass('close');  
    }
}

//Modal Function
var closeModal = function(event) {
    if (event.target !== lightboxImg[0] && event.target !== left[0] && event.target !== right[0]) {
        lightbox.removeClass('open');
    }
}

//Photo Changing Function
var changePhotos = function(event) {
    if (event.target === left[0] || event.key === "ArrowLeft") {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = (images.length - 1);
        }
    } else if (event.target === right[0] || event.key === "ArrowRight") {
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

menu.on('click', displayMenu);
menuPopup.on('click', closeMenu);
$(window).on('click', closeMenu);
$(window).on('scroll', closeMenu);
$(window).on('keydown', keyDown);
left.on('click', changePhotos);
right.on('click', changePhotos);
lightbox.on('click', closeModal);


