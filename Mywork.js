    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.image-slider');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');

        let currentIndex = 0;

        nextBtn.addEventListener('click', () => {
        const totalItems = slider.children.length;
        currentIndex = (currentIndex + 1) % totalItems; // วนกลับไป 0 ถ้าเกิน
        updateSlider();
        });

        prevBtn.addEventListener('click', () => {
        const totalItems = slider.children.length;
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // วนกลับไปหน้าสุดท้ายถ้าต่ำกว่า 0
        updateSlider();
        });

        function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        }
    });