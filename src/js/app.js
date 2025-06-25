
/**
 * Módulo de autenticación y validación de formulario de login
 * @description
 * Este módulo maneja la validación del formulario de inicio de sesión,
 * incluyendo la validación en tiempo real de los campos y el proceso
 * de redirección después del login exitoso.
 */

/**
 * Objeto que almacena los datos del usuario
 * @type {Object}
 * @property {string} usuario - ID o nombre de usuario
 * @property {string} password - Contraseña del usuario
 */
const idUsuario = {
    usuario: '',
    password: ''
};

/**
 * Referencias a elementos del DOM para el formulario de login
 */
const inputNombre = document.querySelector("#usuario");     // Campo de usuario
const inputPassword = document.querySelector("#password");  // Campo de contraseña
const formulario = document.querySelector('#formulariol');  // Formulario completo

/**
 * Referencia al botón de envío del formulario
 * @type {HTMLButtonElement}
 */
const btnSubmit = document.querySelector('#formulario1 button[type="submit"]');

/**
 * Event Listeners para validación en tiempo real
 * Se utiliza el evento 'blur' para validar cuando el campo pierde el foco
 */
inputNombre.addEventListener('blur', validar);    // Validación del campo de usuario
inputPassword.addEventListener('blur', validar);   // Validación del campo de contraseña


/**
 * Valida los campos del formulario en tiempo real
 * @param {Event} e - Evento de blur del campo
 * @description
 * Esta función:
 * 1. Verifica que el campo no esté vacío
 * 2. Muestra/oculta mensajes de error según corresponda
 * 3. Actualiza el objeto idUsuario con los valores validados
 * 4. Comprueba si todos los campos están completos
 */
function validar(e) {
    if(e.target.value.trim() === '') {
        mostrarAlerta('ID y contraseña necesaria', e.target.parentElement);
        idUsuario[e.target.name] = '';
        comprobarID();
        return;
    } 

    // Limpiar cualquier mensaje de error previo
    limpiarAlerta(e.target.parentElement);

    // Actualizar el objeto idUsuario con el valor validado
    idUsuario[e.target.name] = e.target.value.trim().toLowerCase();

    // Verificar si todos los campos están completos
    comprobarID();
}

/**
 * Muestra un mensaje de error en el formulario
 * @param {string} mensaje - Texto del mensaje de error a mostrar
 * @param {HTMLElement} referencia - Elemento del DOM donde se mostrará el error
 * @description
 * Esta función:
 * 1. Limpia cualquier mensaje de error existente
 * 2. Crea un nuevo elemento para el mensaje
 * 3. Agrega las clases de estilo correspondientes
 * 4. Inserta el mensaje en el DOM
 */
function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('errorusuario');
    referencia.appendChild(error);
}   

/**
 * Elimina mensajes de error existentes
 * @param {HTMLElement} referencia - Elemento del DOM donde buscar alertas
 * @description
 * Busca y elimina cualquier mensaje de error existente en el elemento
 * especificado para evitar la acumulación de mensajes
 */
function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.errorusuario');
    if(alerta) {
        alerta.remove();
    }
}

/**
 * Verifica si todos los campos del formulario están completos
 * @description
 * Esta función:
 * 1. Verifica si todos los campos requeridos tienen valor
 * 2. Si están completos, configura el envío del formulario
 * 3. Maneja la redirección después del login exitoso
 */
function comprobarID() {
    if(!Object.values(idUsuario).includes('')) {
        document.getElementById('formulariol').addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío por defecto
            
            // TODO: Agregar validación adicional de credenciales aquí
            
            // Redirección a la página de inicio
            window.location.href = 'inicio.php';
        });
    }
}

    



// boton.addEventListener( "click", function(){

//     const usuario = inputNombre.value.trim()

//     const password = inputPassword.value.trim()

//     if(usuario === "" || usuario === null){
//         alert("tiene que ingresar un id")
//     } else if ( usuario.length <= 5){
//         alert("id muy corto para ser valido")
//     } else if( password.length <= 5 ){
//         alert("la contraseña es muy corta")
//     } else if(!password.match(/\d/)){
//         alert(" la contraseña necesita al menos un digito ")
//     }
//     else{
//         alert("Bienvenido")
//     }


// })

// let logo;

// logo = document.getElementsByClassName('logo');

// console.log(logo)

// seleccionando texto
// document.querySelector('#hola').textContent = 'nuevo hola';
// O TAMBIEN
// const nuevohola = 'Nuevo hola';
//  document.querySelector('#hola').textContent = nuevohola;
// agregar o quitar clases 
// const hola = document.querySelector('.hola');
// hola.classList.add('nuevo-hola');
// hola.classList.remove('hola');
// console.log(hola.classList)

