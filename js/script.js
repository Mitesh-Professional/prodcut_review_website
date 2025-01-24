const slider = document.getElementById('slider');
const images = slider.children;
let currentIndex = 0;
const totalImages = images.length;

const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const nextImage = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
};

const prevImage = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
};

// Set interval for auto-sliding every 5 seconds
setInterval(nextImage, 5000);

// Event listeners for manual sliding with arrows
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);