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
        slides[i].style.opacity = "0";
        desc[i].style.opacity = "0";
    }
    slides[index - 1].style.opacity = "1";
    desc[index - 1].style.opacity = "1";
}