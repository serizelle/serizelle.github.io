const modalEl = document.querySelector('.modal');
const openButtonEl = document.querySelector('.button-open');
const closeButtonEl = document.querySelector('.button-close');

openButtonEl.addEventListener('click', function (e) {
    modalEl.classList.toggle('hidden');
});
closeButtonEl.addEventListener('click', function (e) {
    modalEl.classList.toggle('hidden');
});
