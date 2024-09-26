document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();



    // Validar campos...
    let esValido = true;

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipo = document.getElementById('tipo').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;

    if (!nombre) {
        mostrarError('error-nombre', 'El nombre es obligatorio');
        esValido = false;
    }

    if (!apellido) {
        mostrarError('error-apellido', 'El apellido es obligatorio');
        esValido = false;
    }

    if (!email) {
        mostrarError('error-email', 'El email es obligatorio');
        esValido = false;
    }

    if (!tipo) {
        mostrarError('error-tipo', 'Seleccione el tipo de contacto');
        esValido = false;
    }

    if (!asunto) {
        mostrarError('error-asunto', 'El asunto es obligatorio');
        esValido = false;
    }

    if (!descripcion) {
        mostrarError('error-descripcion', 'La descripción es obligatoria');
        esValido = false;
    }

    if (esValido) { // si el form es valido, llamo a funcion que ejecuta ajax
        
        mensajeGracias();
        this.reset(); // Limpiar el formulario tras el envío
    }
});

// Función que muestra mensajes de error
function mostrarError(idElemento, mensaje) {
    const elementoError = document.getElementById(idElemento);
    elementoError.textContent = mensaje;
    elementoError.style.display = 'block';
}



// lectura de archivo txt
function mensajeGracias() {
    const graciass = new XMLHttpRequest();
    graciass.open('GET', 'mensaje.txt', true);
    
    graciass.onreadystatechange = function() {
        if (graciass.readyState === 4 && graciass.status === 200) {
            // en el dialog modal, inyecto el texto del archivo
            document.getElementById('mensajeGracias').textContent = graciass.responseText;

            // Abrir el diálogo modal
            const ventanaModal = document.getElementById('gracias');
            ventanaModal.showModal();
        }
    };

    graciass.send();
}

// Cerrar el diálogo 
document.getElementById('cerrarDialog').addEventListener('click', function() {
    const dialog = document.getElementById('gracias');
    dialog.close();
});
