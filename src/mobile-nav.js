const navContainer = document.querySelector('.mobile__nav-container');
const nav = navContainer.querySelector('.mobile__nav');
const burger = document.querySelector('#burger');
const closeNav = navContainer.querySelector('#close');

burger.addEventListener('click', (e) => {
    navContainer.classList.remove('is-hidden');
    nav.classList.remove('slide-in');
});
closeNav.addEventListener('click', (e) => {
    navContainer.classList.add('is-hidden');
    nav.classList.add('slide-in');
});
