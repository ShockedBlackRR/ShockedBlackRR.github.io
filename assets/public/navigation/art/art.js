function changeImage(imgId) {
    // Reset opacity of all main images to 0
    const images = document.querySelectorAll('.gallery__img');
    images.forEach(img => img.style.opacity = '0');

    // Set the clicked image's opacity to 1
    const targetImage = document.getElementById(imgId);
    targetImage.style.opacity = '1';
}