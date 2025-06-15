

const idUsuario = {
    usuario: '',
    password: ''
}

// console.log(idUsuario)

// ambos se pueden usar pero queryselector es mas actual que getelementbyId
const inputNombre = document.querySelector("#usuario")
const inputPassword = document.querySelector("#password")
const formulario = document.querySelector('#formulariol')

// seleccionando el boton 
const btnSubmit = document.querySelector('#formulario1 button[type="submit"]')


// asignando eventos 
inputNombre.addEventListener('blur', validar) // blur es en tiempo real, en lugar del event 'click'

inputPassword.addEventListener('blur', validar)


// funcion de validar 
    function validar(e){
        // console.log(e.target.parentElement)
        if(e.target.value.trim() === ''){
            // para hacerlo mas dinamico puede ser con ` el ${e.target.id} para que tome como referencia el campo que se esta validando
            mostrarAlerta('ID y contraseña necesaria', e.target.parentElement); // mandando llamar la funcion 
            idUsuario[e.target.name] = '';
            comprobarID();
            return;
        } 

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores 
        idUsuario[e.target.name] = e.target.value.trim().toLowerCase();
        // console.log(idUsuario)

        // comprobar ID usuario
        comprobarID()
    }

 // funcion para mostrar alerta 
    function mostrarAlerta(mensaje, referencia){ // mensaje se el parametro 
        limpiarAlerta(referencia)

        // generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje; // aqui toma el argumento de la funcion (mensaje)
        // se le pueden agregar aun mas clases tipo ('error, error2. clase3')
        error.classList.add('errorusuario')

        // inyectar el error al formulario 
        // al formulario, agregale un hijo (appendchild) que seria el error 
        // que es lo que se esta contruyendo arriba linea 27
        referencia.appendChild(error)

    }   

    function limpiarAlerta(referencia){
         // poniendo 'referencia.queryselector' solo se va a limitar al campo del usuario y contraseña y el siguiente if ayudara a que solo se muestra la alerta 1 vez y no se llene de spam de alertas de error 
        const alerta = referencia.querySelector('.errorusuario');
        if(alerta){
            alerta.remove();
        }
    }

    function comprobarID(){
        // esto va a ir llenando el array de includes y va a dar un false hasta que todos los campos este llenos
        // console.log(Object.values(idUsuario).includes(''))
        if(!Object.values(idUsuario).includes('')){
            document.getElementById('formulariol').addEventListener('submit', function(e) {
        e.preventDefault(); // Detiene el envío del formulario
        // Aquí podrías validar usuario y contraseña si quieres
        window.location.href = 'inicio.php'; // Redirige
        });
        }else{
                    // ESTO ES PARA QUE FUNCIONE EL BOTON DE MOMENTO 
        
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

