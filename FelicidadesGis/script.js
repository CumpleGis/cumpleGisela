// script.js

function mostrarMensaje() {
    var mensaje = document.getElementById('mensaje-sorpresa');
    if (mensaje.style.display === "none" || mensaje.style.display === "") {
        mensaje.style.display = "block";
        mensaje.classList.add('show');
    } else {
        mensaje.style.display = "none";
        mensaje.classList.remove('show');
    }
}

function toggleImage(divElement) {
    var imgElement = divElement.querySelector('img');
    imgElement.classList.toggle('active');
    if (imgElement.classList.contains('active')) {
        divElement.style.backgroundColor = 'transparent';
    } else {
        divElement.style.backgroundColor = 'black';
    }
}

function animarCorazon() {
    var corazon = document.getElementById('corazon');
    corazon.classList.toggle('clicked');

    var sorpresa = document.getElementById('sorpresa');
    if (sorpresa.style.display === "none" || sorpresa.style.display === "") {
        sorpresa.style.display = "block";
        sorpresa.classList.add('show');
    } else {
        sorpresa.style.display = "none";
        sorpresa.classList.remove('show');
    }
}
