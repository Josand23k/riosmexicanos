/* Código para abrir y cerrar el menu en el modo responsive haciendo click en el botón */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

/* Slider | página Index */
const images = document.querySelectorAll("#slider img");
        let currentImage = 0;

        function nextImage() {
            images[currentImage].style.opacity = 0;
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].style.opacity = 1;
        }

        // Mostrar la primera imagen y configurar el intervalo
        images[currentImage].style.opacity = 1;
        setInterval(nextImage, 3000);