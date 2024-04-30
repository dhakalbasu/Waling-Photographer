const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn'); // Corrected class name
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

// Slider next button
nextBtn.onclick = () => { // Corrected 'oneclick' to 'onclick'
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber >= numberOfSlides) { // Adjusted the condition
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
};

// Slider prev button
prevBtn.onclick = () => { // Corrected 'oneclick' to 'onclick'
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) { // Corrected the condition
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add('active');
};

