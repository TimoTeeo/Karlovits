'use strict';
const header = document.querySelector('.header');
const menuBurger = document.getElementById('header-menu');
const dropdownMenu = document.querySelector('.header__menu--dropdown');
const workLink = document.querySelector('.work-link');
const photographyLink = document.querySelector('.photography-link');
const dropdownMenuWork = document.querySelector('.header__menu--dropdown--work-nested');
const dropdownMenuPhotography = document.querySelector('.header__menu--dropdown--photography-nested');
const backArrow = document.querySelectorAll('.arrow-container img');

console.log(dropdownMenu);
window.addEventListener('scroll', function() {
    if (window.scrollY > 5) {
        header.classList.add('setBackground');
    }
    else {
        header.classList.remove('setBackground');
    }
})

menuBurger.addEventListener('click', function() {
    // if (dropdownMenuWork.classList.contains('show')) {
    //     dropdownMenuWork.classList.remove('show');
    // }
    // if (dropdownMenuPhotography.classList.contains('show')) {
    //     dropdownMenuPhotography.classList.remove('show');
    // }
    console.log(dropdownMenu);
    menuBurger.classList.toggle('change');
    dropdownMenu.classList.toggle('show');
    // dropdownMenuWork.classList.toggle('show');
})

// workLink.addEventListener('click', function(e) {
//     console.log(e);
//     e.stopPropagation();
//     menuBurger.classList.add('change');
//     dropdownMenuWork.classList.add('show')
// })
// photographyLink.addEventListener('click', function(e) {
//     console.log(e);
//     e.stopPropagation();
//     menuBurger.classList.add('change');
//     dropdownMenuPhotography.classList.add('show')
// })

backArrow.forEach((arrow) => {
    arrow.addEventListener('click', function(e) {
        e.stopPropagation();
        // menuBurger.classList.add('change');
        dropdownMenuWork.classList.remove('show');
        dropdownMenuPhotography.classList.remove('show');
        dropdownMenu.classList.add('show');
    })
}) 
