# Photo Gallery
--------------
[Live Demo!](https://hglasser.github.io/photo_gallery/)

A website that contains a static list of photos of my dog, Gracie. The photos can be pulled up into a modal, and you can flip through the photos using the arrow controls within the modal.

## jQuery
---------
This photo gallery was originally utilizing the DOM, but I later migrated everything over to get some more practice using jQuery. 

## Media Queries
---------------

### Main
I used media queries to adjust the height and width of the modal images at two breaking points (680px and 455px) to prevent any major distortion of the photos when the width of the screen is greatly reduced. I also adjusted the percentage of the height of the caption box to more appropriately fit the accompanying screen size. 

```CSS
@media (max-width: 680px) {
    .image-caption-box {
        height: 70%;
    }
}

@media (max-width: 455px) {
    .image-caption-box {
        height: 55%;
    }
    .lightbox-image {
        height: 75%;
    }
    .lightbox-caption {
        height: 25%;
    }
}
```

### About
The about page contains some basic media queries to remove photos when the size of the screen decreases. 

```CSS
@media (max-width: 680px) {
    #image3 {
        display: none;
    }
}

@media (max-width: 455px) {
    #image1 {
        display: none;
    }
}
```




