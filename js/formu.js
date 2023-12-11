function mostrarError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function ocultarError(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function enviarFormulario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Oculta todos los mensajes de error al inicio
    ocultarError('nameError');
    ocultarError('emailError');
    ocultarError('messageError');

    var validacionCorrecta = true;

    if (!name) {
        mostrarError('nameError', 'Por favor, ingrese su nombre.');
        validacionCorrecta = false;
    }

    if (!email || !validateEmail(email)) {
        mostrarError('emailError', 'Por favor, ingrese un correo electrónico válido.');
        validacionCorrecta = false;
    }

    if (!message) {
        mostrarError('messageError', 'Por favor, ingrese su mensaje.');
        validacionCorrecta = false;
    }

    if (validacionCorrecta) {
        alert("¡Ha sido enviado!");
    }
}

function borrarFormulario() {
    document.getElementById('contactForm').reset();
    // Oculta todos los mensajes de error al borrar el formulario
    ocultarError('nameError');
    ocultarError('emailError');
    ocultarError('messageError');
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}