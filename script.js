/* Código para abrir y cerrar el menu en el modo responsive haciendo click en el botón */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide-card");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Cambia la imagen cada 2 segundos
}

// Contendor de datos, en las páginas de actividades

    function mostrarContenido(numero) {
        // Oculta todos los contenidos
        var contenidos = document.getElementsByClassName("datos-cards");
        for (var i = 0; i < contenidos.length; i++) {
            contenidos[i].style.display = "none";
         }
        // Muestra el contenido seleccionado
        document.getElementById("contenido" + numero).style.display = "block";
    }
    // Mostrar el primer contenido por defecto al cargar la página
    mostrarContenido(0);



  

    