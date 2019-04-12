class Carousel {
    constructor(element){
    this.element = element;
    console.log('el', this.element);
        this.buttonr = this.element.querySelector('.right-button');
        this.buttonl = this.element.querySelector('.left-button');
        this.images = this.element.querySelectorAll('img');
        this.images.foreach((image) =>images(image));
        console.log('right', this.buttonr);
        console.log('left', this.buttonl);
        console.log('images', this.images);
        cosole.log(images);
    }

}

const carousel = document.querySelectorAll('.carousel');
carousel.forEach(function(element){
     return new Carousel(element)
});
console.log('carousel', carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/