function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

var slideIndex = 1;

function plusSlides(n, cls) {
    showSlides((slideIndex += n), cls);
}

function currentSlide(n, cls) {
    showSlides((slideIndex = n), cls);
}

function showSlides(n, cls) {
    var i;
    var slides = document.getElementsByClassName(cls);
    console.log(cls);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
