document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let left_button = document.querySelector('.button-left-slide');
    let right_button = document.querySelector('.button-right-slide');
    let slide1Button = document.querySelector('#slide-1-btn');
    let slide2Button = document.querySelector('#slide-2-btn');
    let slide3Button = document.querySelector('#slide-3-btn');
    let slide4Button = document.querySelector('#slide-4-btn');

    let currentIndex = 0; 

    function updateSlides(newIndex, direction) {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active', 'left', 'right');
            if (idx === newIndex) {
                slide.classList.add('active');
            } else if (idx === currentIndex) {
                slide.classList.add(direction);
            }
        });
        currentIndex = newIndex;
    }

    left_button.addEventListener('click', () => {
        let newIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlides(newIndex, 'right');
    });

    right_button.addEventListener('click', () => {
        let newIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlides(newIndex, 'left');
    });

    slide1Button.addEventListener('click', () => {
        if (currentIndex !== 0) {
            updateSlides(0, 'right');
        }
    });

    slide2Button.addEventListener('click', () => {
        if (currentIndex !== 1) {
            updateSlides(1, 'left');
        }
    });

    slide3Button.addEventListener('click', () => {
        if (currentIndex !== 2) {
            updateSlides(2, 'left');
        }
    });

    slide4Button.addEventListener('click', () => {
        if (currentIndex !== 3) {
            updateSlides(3, 'left');
        }
    });

    updateSlides(currentIndex, 'left');
});
