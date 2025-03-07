let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change image every 3 seconds

// Initialize the first slide
showSlide();
