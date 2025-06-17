// Seleccionando el contenedor de los botones 
const contenedorBtns = document.querySelector("#botonesConcepto");

// Seleccionando los botones principales
const btnGerencial = document.querySelector("#boton-gerencial-concepto");
const btnSupervisor = document.querySelector("#boton-supervisor-concepto");
const btnRH = document.querySelector("#boton-rh-concepto");

// Event listeners para los botones principales
btnGerencial.addEventListener("click", () => {
    mostrarSubMenu("Gerenciales", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
});

btnSupervisor.addEventListener("click", () => {
    mostrarSubMenu("Supervisores", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
});

btnRH.addEventListener("click", () => {
    mostrarSubMenu("Recursos Humanos", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
});

// Función para mostrar submenús
function mostrarSubMenu(titulo, modulos) {
    contenedorBtns.innerHTML = "";

    modulos.forEach(nombreModulo => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.innerHTML = `<p>${nombreModulo}</p>`;

        if (nombreModulo === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else {
            nuevoBoton.addEventListener("click", () => {
                console.log(`${titulo} eligió ${nombreModulo}`);
                mostrarSubMenuModulo(titulo, nombreModulo);
            });
        }

        contenedorBtns.appendChild(nuevoBoton);
    });
}

// Función para mostrar el submenú de cada módulo
function mostrarSubMenuModulo(titulo, modulo) {
    contenedorBtns.innerHTML = "";

    const opciones = ["Crear Modulo", "Crear Examen", "volver"];

    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.innerHTML = `<p>${opcion}</p>`;

        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", () => {
                mostrarSubMenu(titulo, ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
            });
        } else if (opcion === "Crear Modulo") {
            nuevoBoton.addEventListener("click", () => {
                window.location.href = "/admin/documentos/crear.php";
            });
        } else if (opcion === "Crear Examen") {
            nuevoBoton.addEventListener("click", () => {
                console.log(`Creando examen para ${titulo} - ${modulo}`);
            });
        }

        contenedorBtns.appendChild(nuevoBoton);
    });
}

// Función para volver al menú principal
function mostrarMenuPrincipal() {
    contenedorBtns.innerHTML = "";

    // Crear botón Gerenciales
    const btnGerencialNuevo = document.createElement("button");
    btnGerencialNuevo.classList.add("boton1");
    btnGerencialNuevo.id = "boton-gerencial-concepto";
    btnGerencialNuevo.innerHTML = "<p>Gerenciales</p>";
    btnGerencialNuevo.addEventListener("click", () => {
        mostrarSubMenu("Gerenciales", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
    });

    // Crear botón Supervisores
    const btnSupervisorNuevo = document.createElement("button");
    btnSupervisorNuevo.classList.add("boton1");
    btnSupervisorNuevo.id = "boton-supervisor-concepto";
    btnSupervisorNuevo.innerHTML = "<p>Supervisores</p>";
    btnSupervisorNuevo.addEventListener("click", () => {
        mostrarSubMenu("Supervisores", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
    });

    // Crear botón Recursos Humanos
    const btnRHNuevo = document.createElement("button");
    btnRHNuevo.classList.add("boton1");
    btnRHNuevo.id = "boton-rh-concepto";
    btnRHNuevo.innerHTML = "<p>Recursos Humanos</p>";
    btnRHNuevo.addEventListener("click", () => {
        mostrarSubMenu("Recursos Humanos", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "volver"]);
    });

    // Agregar los botones al contenedor
    contenedorBtns.appendChild(btnGerencialNuevo);
    contenedorBtns.appendChild(btnSupervisorNuevo);
    contenedorBtns.appendChild(btnRHNuevo);
}
