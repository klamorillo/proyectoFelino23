// Validación del formulario
function validarFormulario() {
    var nombreCompleto = document.getElementById("txtNombreCompleto").value;
    var correoElectronico = document.getElementById("txtCorreoElectronico").value;
    var area = document.getElementById("txtArea").value;

    // Validar campo Nombre completo
    if (nombreCompleto.trim() === "") {
        alert("Por favor, ingrese su nombre completo.");
        return false;
    }

    // Validar campo Correo electronico
    if (correoElectronico.trim() === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correoElectronico)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Validar campo Sugerencias
    if (area.trim() === "") {
        alert("Por favor, ingrese sus sugerencias.");
        return false;
    }

    return true;
}

document.querySelector("form").addEventListener("submit", function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});
