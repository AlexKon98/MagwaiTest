const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    grabCursor: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

const bullets = document.querySelectorAll('.swiper-pagination-bullet');

window.addEventListener('DOMContentLoaded', () => {
    bullets[0].textContent = 'DOGIE COIN';
    bullets[1].textContent = 'ПАДЕНИЕ';
    bullets[2].textContent = 'ВОЗВРАЩЕНИЕ';
});