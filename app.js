let index = 1;
let images = document.querySelectorAll('.slideImg');

displaySlides(index);

function changeSlide(num) {
    displaySlides(index += num);
}

function displaySlides(num){
    let slides = document.querySelectorAll('.imgSlides');
    let desc = document.querySelectorAll('.testimonial');

    if(num > slides.length) {
        index = 1;
    }
    if (num < 1){
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        desc[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
    desc[index - 1].style.display = "block";
}

for(let image of images) {
    image.addEventListener("onload", fade);
    image.style.opacity = "0";
}

function fade() {
    this.style.transition = "opacity .5s";
    this.style.opacity = "1";
}