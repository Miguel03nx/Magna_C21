
// seleccionando el contenedor de los botones 

const contenedorBtns = document.querySelector("#botonesRH");

// seleccionando los botones de gerenciales y de supervisores

const btnGerencial = document.querySelector("#boton-gerencial");

const btnSupervisor = document.querySelector("#boton-supervisor");

// creando el event listener de click del boton de gerencial
// mostrarSubMenuGerenciales es el nombre de la funcion que se va a crear 
// btnGerencial.addEventListener("click", mostrarSubMenuGerenciales); 
// btnSupervisor.addEventListener("click", mostrarSubMenuSupervisores); 

btnGerencial.addEventListener("click", () => { // el arreglo crea los nuevos botones es uno de los parametros de la funcion, "Gerenciales es el boton que va a dar el submenu despues"
    mostrarSubMenu("Gerenciales", ["modulo 1", "modulo 2", "modulo 3", "volver"]);
});

btnSupervisor.addEventListener("click", () => {
    mostrarSubMenu("Supervisores", ["modulo 1", "modulo 2", "modulo 3", "volver"]);
});


// esta funcion se ejecutara cuando se haga click en el boton de "Gerenciales"
function mostrarSubMenu(titulo, modulos){ // estos son los paramatros 
    // console.log("hiciste click en gerenciales")

    // con esto se limpia el contenedor principal al momento de que le damos click a gerenciales 
    contenedorBtns.innerHTML = "";

    modulos.forEach(nombreModulo => {
        // console.log(nombreModulo);
        const nuevoBoton = document.createElement("button") // asi creamos un boton <button></button>
        nuevoBoton.classList.add("boton1"); // le agregamos la clase para que tenga los mismos estilos que los primeros 
        nuevoBoton.textContent = nombreModulo; // con esto se le agrega el nombre (texto visible) 

        // si el boton es "volver", que regrese al menu principal 
        if(nombreModulo === "volver"){
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else{
            // si es uno de los modulos, mostramos un mensaje (o haces otra accion despues)
            nuevoBoton.addEventListener("click", () =>{
                // aqui se muestra la opcion que escoge cada titulo por ej que escogiste el gerencial y que modulo fue si el 1, 2 etc
                console.log(`${titulo} eligio ${nombreModulo}`);
                if (nombreModulo === "modulo 1"){
                    mostrarSubMenuModulo1();
                }
            });
        }


        // se agrega el boton al contenedor
        contenedorBtns.appendChild(nuevoBoton);
    })
}

// funcion para mostrar contenido de los modulos para gerenciales y para supervisores
function mostrarSubMenuModulo1(){
    // limpiamos el contenedor 
    contenedorBtns.innerHTML = "";

    // aqui creamos los botones del nivel 3 de navegacion 
    const opcionesModulo1 = ["Crear Modulo", "Crear Examen", "volver"];

    opcionesModulo1.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.textContent = opcion;

        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", ()=> {
                // con esto volvemos al menu anterior a los modulos 
                mostrarSubMenu("Gerenciales", ["modulo 1", "modulo 2", "modulo 3", "volver"]);
            });
        } else if (opcion === "Crear Modulo") {
            nuevoBoton.addEventListener("click", ()=> {
                // Redirigir a la página de crear módulo
                window.location.href = "/admin/documentos/crear.php";
            });
        } else if (opcion === "Crear Examen") {
            nuevoBoton.addEventListener("click", ()=> {
                console.log("Creando examen...");
            });
        }

        contenedorBtns.appendChild(nuevoBoton);
    })

}


// esta funcion es para el boton de volver al menu principal desde los modulos 
function mostrarMenuPrincipal(){
    // se limpia primero el contenedor 
    contenedorBtns.innerHTML = "";

    // Crear el botón gerencial
    const btnGerencialNuevo = document.createElement("button");
    btnGerencialNuevo.classList.add("boton1");
    btnGerencialNuevo.id = "boton-gerencial";
    btnGerencialNuevo.innerHTML = "<p>Gerenciales</p>";
    btnGerencialNuevo.addEventListener("click", () => mostrarSubMenu("Gerenciales", ["modulo 1", "modulo 2", "modulo 3", "volver"]));

    // Crear el botón de supervisor
    const btnSupervisorNuevo = document.createElement("button");
    btnSupervisorNuevo.classList.add("boton1");
    btnSupervisorNuevo.id = "boton-supervisor";
    btnSupervisorNuevo.innerHTML = "<p>Supervisores</p>";
    btnSupervisorNuevo.addEventListener("click", () => mostrarSubMenu("Supervisores", ["modulo 1", "modulo 2", "modulo 3", "volver"]));

    // Agregar los botones al contenedor
    contenedorBtns.appendChild(btnGerencialNuevo);
    contenedorBtns.appendChild(btnSupervisorNuevo);
}
