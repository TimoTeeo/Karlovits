'use strict';

const menuBurger = document.getElementById('header-menu');
const dropdownMenu = document.querySelector('.header__menu--dropdown');
const workLink = document.querySelector('.work-link');
const dropdownMenuWork = document.querySelector('.header__menu--dropdown--work-nested');
const backArrow = document.querySelector('.arrow-container img');

console.log(dropdownMenu);
menuBurger.addEventListener('click', function() {
    if (dropdownMenuWork.classList.contains('show')) {
        dropdownMenuWork.classList.remove('show');
    }
    console.log(dropdownMenu);
    menuBurger.classList.toggle('change');
    dropdownMenu.classList.toggle('show');
    // dropdownMenuWork.classList.toggle('show');
})

workLink.addEventListener('click', function(e) {
    console.log(e);
    e.stopPropagation();
    menuBurger.classList.add('change');
    dropdownMenuWork.classList.add('show')
})

backArrow.addEventListener('click', function(e) {
    e.stopPropagation();
    // menuBurger.classList.add('change');
    dropdownMenuWork.classList.remove('show');
    dropdownMenu.classList.add('show');
})