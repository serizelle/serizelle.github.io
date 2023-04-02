const modalEl = document.querySelector('.modal');
const openButtonEl = document.querySelector('.button-open');
const closeButtonEl = document.querySelector('.button-close');

openButtonEl.addEventListener('click', function (e) {
    modalEl.classList.toggle('hidden');
});
closeButtonEl.addEventListener('click', function (e) {
    modalEl.classList.toggle('hidden');
});

//

const burgerEl = document.querySelector('.logo');
const menuEl = document.querySelector('.menu__burger');

burgerEl.addEventListener('click', function (e) {
    menuEl.classList.toggle('menu_show');
});
