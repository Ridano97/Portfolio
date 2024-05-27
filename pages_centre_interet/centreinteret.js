let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlide ? 'block' : 'none';
        });
    }

    function moveSlide(step) {
        currentSlide += step;
        showSlide(currentSlide);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            moveSlide(1);
        }, 3000); // Change 3000 to the desired interval in milliseconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentSlide);
        startAutoPlay();
    });

    // Optionally, you can stop the auto-play when the user interacts with the controls
    document.querySelector('.prev').addEventListener('click', () => {
        stopAutoPlay();
        moveSlide(-1);
        startAutoPlay();
    });

    document.querySelector('.next').addEventListener('click', () => {
        stopAutoPlay();
        moveSlide(1);
        startAutoPlay();
    });

    // Optionally, you can stop the auto-play when the user hovers over the carousel
    document.querySelector('.carousel').addEventListener('mouseover', stopAutoPlay);
    document.querySelector('.carousel').addEventListener('mouseout', startAutoPlay);