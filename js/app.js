'use strict';
const header = document.querySelector('.header');
const menuBurger = document.getElementById('header-menu');
const dropdownMenu = document.querySelector('.header__menu--dropdown');
const workLink = document.querySelector('.work-link');
const photographyLink = document.querySelector('.photography-link');
const dropdownMenuWork = document.querySelector('.header__menu--dropdown--work-nested');
const dropdownMenuPhotography = document.querySelector('.header__menu--dropdown--photography-nested');
const backArrow = document.querySelectorAll('.arrow-container img');

window.addEventListener('scroll', function() {
    if (window.scrollY > 5) {
        header.classList.add('setBackground');
    }
    else {
        header.classList.remove('setBackground');
    }
})

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('change');
    dropdownMenu.classList.toggle('show');
})

backArrow.forEach((arrow) => {
    arrow.addEventListener('click', function(e) {
        e.stopPropagation();
        // menuBurger.classList.add('change');
        dropdownMenuWork.classList.remove('show');
        dropdownMenuPhotography.classList.remove('show');
        dropdownMenu.classList.add('show');
    })
}) 
