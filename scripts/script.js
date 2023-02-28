
const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-menu');
const body = document.querySelector('body')
const nav = document.querySelector('.burger-menu__item')

const toggleMenu = function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('burger-active')
}

menuBtn.addEventListener('click', toggleMenu)
nav.addEventListener('click', toggleMenu)