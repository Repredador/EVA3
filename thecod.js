document.addEventListener('DOMContentLoaded', function() {
    
    var usuarios = []; //almacenar los usuarios en lamemoria

    actualizarusis(); //obtener la lista de usuarios cuando carga la página

    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); //formu no se envie automatico

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var rut = document.getElementById('rut').value;
        var correo = document.getElementById('correo').value;

        usuarios.push({ nombre: nombre, apellido: apellido, rut: rut, correo: correo }); //agregar nuevo usuario al array

        actualizarusis();

        document.getElementById('formulario').reset();
    });

    //actualizar la lista de usuarios en la página
    function actualizarusis() {
        var listaUsuarios = document.getElementById('listaUsuarios');
        listaUsuarios.innerHTML = ''; //limpiar la lista
        usuarios.forEach((usuario, index) => {
            var li = document.createElement('li');
            li.innerHTML = `<strong>ID:</strong> ${index + 1} | <strong>Nombre:</strong> ${usuario.nombre} | <strong>Apellido:</strong> ${usuario.apellido} |<strong>Rut:</strong> ${usuario.rut} |<strong>Correo:</strong> ${usuario.correo} | `;
            
            var editarBtn = document.createElement('button'); //editar usuario boton
            editarBtn.textContent = 'Editar';
            editarBtn.onclick = function() {
                editarusuario(index);
            };
            li.appendChild(editarBtn);
            
            var eliminarBtn = document.createElement('button'); //eliminar usuario boton
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.onclick = function() {
                eliminarusuario(index);
            };
            li.appendChild(eliminarBtn);

            listaUsuarios.appendChild(li);
        });
    }

    function editarusuario(index) {
        var nuevonombre = prompt('Ingrese el nuevo nombre:'); //editar usuario
        var nuevoapellido = prompt('Ingrese el nuevo apellido:');
        var nuevorut = prompt('Ingrese el nuevo rut:');
        var nuevocorreo = prompt('Ingrese el nuevo correo:');
        if (nuevonombre && nuevocorreo) {
            usuarios[index].nombre = nuevonombre;
            usuarios[index].apellido = nuevoapellido;
            usuarios[index].rut = nuevorut;
            usuarios[index].correo = nuevocorreo;
            actualizarusis();
        }
    }

    function eliminarusuario(index) {
        if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) { //eliminar un usuario
            usuarios.splice(index, 1);
            actualizarusis();
        }
    }
});
