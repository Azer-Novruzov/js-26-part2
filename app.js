let images = document.querySelectorAll('.gallery img');
function resetImages() {
    images.forEach(img => img.classList.remove('enlarged'));
}
images.forEach(img => {
    img.addEventListener('click', () => {
        if (img.classList.contains('enlarged')) {
            img.classList.remove('enlarged');
        } else {
            resetImages();
            img.classList.add('enlarged');
        }
    });
});
let images2 = document.querySelector('.carousel-images');
    let prevButton = document.querySelector('.previous');
    let nextButton = document.querySelector('.next');
    let totalImages = document.querySelectorAll('.carousel-images img').length;
    let currentIndex = 0;
    function updateCarousel() {
        let offset = -currentIndex * 100;
        images2.style.transform = `translateX(${offset}%)`;
    }
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
    });
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    updateCarousel();
