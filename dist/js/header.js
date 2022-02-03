// Обработчики события для поведения формы и тела страницы
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.header__popup-btn');
const close = document.querySelector('.popup__close');
const swiperBtn = document.querySelectorAll('.swiper__btn');
const menu = document.getElementById('menu');
const menuBTN = document.getElementById('menu-btn');
const modalBtn = document.querySelector('.menu__btn');
const inputName = document.getElementById('name');
const emailName = document.getElementById('email');
const commentName = document.getElementById('comment');

modalBtn.addEventListener('click', () => {
    menu.classList.remove('menu-active');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
})

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        event.currentTarget.style.display = 'none';
        document.body.style.overflow = 'visible';
    }
});

popupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
    document.body.style.overflow = 'visible';
});
// 

// Создание функции обработки события blur и её назначение на элементы

function blur() {
    if (this.value) {
        document.getElementById(`${this.id}-label`).classList.add('text-small');
    } else {
        document.getElementById(`${this.id}-label`).classList.remove('text-small');
    }
}

inputName.addEventListener('blur', blur);
emailName.addEventListener('blur', blur);
commentName.addEventListener('blur', (event) => {
    if (event.currentTarget.value) {
        document.getElementById(`comment-label`).classList.add('text-hidden');
    } else {
        document.getElementById(`comment-label`).classList.remove('text-hidden');
    }
});
// 

// Открытие\Закрытие выпадающего меню

menuBTN.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    if (menu.classList.contains('menu-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
});
//

// Обработчики события для открытия модального окна для кнопок элементов слайдера

swiperBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    })
})