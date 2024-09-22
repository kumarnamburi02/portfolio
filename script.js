let currentIndex = 0;
const items = document.querySelectorAll('.achievement-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });
    items[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Automatically change slide every 4 seconds
setInterval(nextSlide, 4000);
