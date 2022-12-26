const navContainer = document.querySelector('.mobile__nav-container');
const burger = document.querySelector('#burger');
const closeNav = navContainer.querySelector('#close');

burger.addEventListener('click', (e) => {
    navContainer.classList.remove('is-hidden');
});
closeNav.addEventListener('click', (e) => {
    navContainer.classList.add('is-hidden');
});