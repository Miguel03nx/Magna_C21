
/**
 * Módulo de Recursos Humanos (RRHH)
 * @description
 * Este módulo maneja la funcionalidad de la sección de RRHH,
 * incluyendo la navegación y gestión de módulos tanto para
 * usuarios Gerenciales como Supervisores.
 * 
 * Estado: Temporalmente deshabilitado
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sección de RRHH temporalmente deshabilitada');
});

/**
 * Event Listeners para los botones principales
 * @description
 * Configura los botones de Gerenciales y Supervisores para mostrar
 * sus respectivos submenús cuando son clickeados
 */
btnGerencial.addEventListener("click", () => {
    mostrarSubMenu("Gerenciales", ["modulo 1", "modulo 2", "modulo 3", "volver"]);
});

btnSupervisor.addEventListener("click", () => {
    mostrarSubMenu("Supervisores", ["modulo 1", "modulo 2", "modulo 3", "volver"]);
});


/**
 * Genera y muestra el submenú de módulos
 * @param {string} titulo - Tipo de usuario ('Gerenciales' o 'Supervisores')
 * @param {string[]} modulos - Array con los nombres de los módulos a mostrar
 * @description
 * Esta función:
 * 1. Limpia el contenedor de botones actual
 * 2. Crea nuevos botones para cada módulo
 * 3. Configura los event listeners para cada botón
 * 4. Maneja la navegación y la lógica de "volver"
 */
function mostrarSubMenu(titulo, modulos) {
    // Limpiar el contenedor de botones
    contenedorBtns.innerHTML = "";

    // Crear y configurar los botones para cada módulo
    modulos.forEach(nombreModulo => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.textContent = nombreModulo;

        // Configurar el comportamiento del botón
        if(nombreModulo === "volver") {
            // Botón volver: regresa al menú principal
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else {
            // Botones de módulo: muestran contenido específico
            nuevoBoton.addEventListener("click", () => {
                console.log(`${titulo} eligió ${nombreModulo}`);
                if (nombreModulo === "modulo 1") {
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
