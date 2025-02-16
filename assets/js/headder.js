const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuIcon.classList.toggle('hidden');
    mobileMenuClose.classList.toggle('hidden');
});