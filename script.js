/* Código para abrir y cerrar el menu en el modo responsive haciendo click en el botón */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});