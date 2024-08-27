document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        // Prevenir el envío del formulario por defecto
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar los campos
        let isValid = true;
        const errorMessages = [];

        if (nombre === '') {
            isValid = false;
            errorMessages.push('El nombre es obligatorio.');
        }
        // Testea el formato del correo, si está ok, devuelve true, sino false
        if (correo === '' || !/\S+@\S+\.\S+/.test(correo)) {
            isValid = false;
            errorMessages.push('Por favor, introduce un correo electrónico válido.');
        }
        // Testea el formato que solo acepte números
        if (telefono === '' || !/^\d+$/.test(telefono)) {
            isValid = false;
            errorMessages.push('Por favor, introduce un número de teléfono válido.');
        }
        if (direccion === '') {
            isValid = false;
            errorMessages.push('La dirección es obligatoria.');
        }
        if (mensaje === '') {
            isValid = false;
            errorMessages.push('El mensaje es obligatorio.');
        }

        // Mostrar mensajes de error
        if (!isValid) {
            alert(errorMessages.join('\n'));
            return;
        }


        alert('Formulario enviado correctamente!');
        form.submit();
    });
});
