document.addEventListener('DOMContentLoaded', function() {
    var imagenes = document.querySelectorAll('.imagen');

    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            mostrarImagen(imagen.dataset.src);
        });
    });
});

function mostrarImagen(src) {
    document.getElementById('lightbox-contenido').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function cerrarImagen() {
    document.getElementById('lightbox').style.display = 'none';
}
