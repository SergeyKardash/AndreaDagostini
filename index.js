const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        menuButton.classList.add('active');
    } else {
        menu.classList.remove('active');
        menuButton.classList.remove('active');
    }
}