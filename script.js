const modalEl = document.querySelector('.modal');
const openButtonEl = document.querySelector('.button-open');
const closeButtonEl = document.querySelector('.button-close');

openButtonEl.addEventListener('click', function (e) {
    modalEl.classList.toggle('hidden');
});
closeButtonEl.addEventListener('click', function (e) {
    modalEl.classList.toggle('hidden');
});

const modalEl2 = document.querySelector('.modal2');
const openButtonEl2 = document.querySelector('.button-open2');
const closeButtonEl2 = document.querySelector('.button-close2');

openButtonEl2.addEventListener('click', function (e) {
    modalEl2.classList.toggle('hidden');
});
closeButtonEl2.addEventListener('click', function (e) {
    modalEl2.classList.toggle('hidden');
});

//BURGER

const burgerEl = document.querySelector('.logo__mobile');
const menuEl = document.querySelector('.menu__burger');

burgerEl.addEventListener('click', function (e) {
    menuEl.classList.toggle('menu_show');
});

//about me slider
const panels = document.querySelectorAll('.panel');

 panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
 })

 function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
 }

 //CAROUSEL
 const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
