/**
 * Módulo de gestión de Supervisiones
 * @description
 * Este módulo maneja toda la interfaz y funcionalidad de la sección
 * de Supervisiones, incluyendo la navegación entre menús, la gestión
 * de contenido dinámico y las acciones específicas de supervisión.
 */

/**
 * Referencias a elementos del DOM
 */
const contenedorBtns = document.querySelector("#botonesSupervisores");      // Contenedor principal de botones
const contenidoDinamico = document.querySelector('.contenido-dinamico');    // Área de contenido dinámico

/**
 * Variables de estado
 * @type {string} menuPrincipalHTML - Almacena el HTML del menú principal
 * @type {string} moduloActual - Almacena el módulo actualmente seleccionado
 */
let menuPrincipalHTML = '';
let moduloActual = '';

/**
 * Guarda el estado del menú principal
 * @description
 * Almacena el HTML del menú principal para poder restaurarlo
 * cuando el usuario quiera volver desde cualquier submenú
 */
function guardarMenuPrincipal() {
    menuPrincipalHTML = contenedorBtns.innerHTML;
}

/**
 * Restaura y muestra el menú principal
 * @description
 * Esta función:
 * 1. Restaura el HTML del menú principal
 * 2. Ajusta la visibilidad de los contenedores
 * 3. Reconfigura los event listeners
 */
function mostrarMenuPrincipal() {
    contenedorBtns.innerHTML = menuPrincipalHTML;
    contenidoDinamico.style.display = 'none';
    contenedorBtns.style.display = 'grid';
    agregarEventListeners();
}

/**
 * Configura los event listeners para todos los botones
 * @description
 * Esta función:
 * 1. Busca todos los botones de supervisor
 * 2. Asigna los manejadores de eventos según el tipo de contenido
 * 3. Configura la navegación a las diferentes secciones
 */
function agregarEventListeners() {
    document.querySelectorAll('.boton-supervisor').forEach(boton => {
        boton.addEventListener('click', function() {
            const contenido = this.getAttribute('data-contenido');
            
            // Navegar a la sección correspondiente
            switch(contenido) {
                case 'evaluacion-liderazgo':
                    mostrarMenuEvaluacionLiderazgo();
                    break;
                case 'programa-liderazgo':
                    mostrarMenuProgramaLiderazgo();
                    break;
                case 'calendario':
                    mostrarMenuCalendario();
                    break;
            }
        });
    });
}

/**
 * Muestra el menú de Evaluación de Liderazgo
 * @description
 * Esta función:
 * 1. Limpia el contenedor de botones
 * 2. Genera nuevos botones para las opciones de evaluación
 * 3. Configura las acciones específicas de evaluación
 * 4. Incluye la opción de volver al menú principal
 */
function mostrarMenuEvaluacionLiderazgo() {
    contenedorBtns.innerHTML = "";
    const opciones = ["Descargar aquí", "volver"];
    
    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton-supervisor", "boton-supervisor-evaluacion");
        nuevoBoton.textContent = opcion;
        
        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else {
            nuevoBoton.addEventListener("click", () => {
                console.log(`Seleccionaste: ${opcion}`);
                alert('Descargando evaluación...');
            });
        }
        
        contenedorBtns.appendChild(nuevoBoton);
    });
}

// Función para mostrar el menú de Programa de Liderazgo
// Función para mostrar el menú de Programa de Liderazgo
function mostrarMenuProgramaLiderazgo() {
    contenedorBtns.innerHTML = ""; // Limpia el contenido actual

    // CREAMOS UN NUEVO DIV PARA LOS BOTONES DE MÓDULOS
    const divModulos = document.createElement("div");
    divModulos.classList.add("contenedor-modulos-grid"); // Le asignamos una clase para estilos Grid

    const modulos = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "Módulo 6", "volver"];

    modulos.forEach(modulo => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton-supervisor", "boton-supervisor-modulo");
        nuevoBoton.textContent = modulo;

        if (modulo === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
            // Si el botón "volver" no debe estar en el grid, lo puedes añadir directamente a contenedorBtns
            // o darle estilos específicos para que no participe en el grid (ej. width: 100%)
            contenedorBtns.appendChild(nuevoBoton); // Añadimos el botón "volver" directamente al contenedorBtns
        } else {
            nuevoBoton.addEventListener("click", () => {
                mostrarMenuModulo(modulo);
            });
            divModulos.appendChild(nuevoBoton); // Añadimos los botones de módulo al nuevo divModulos
        }
    });

    // Añadimos el nuevo div con los botones de módulo al contenedorBtns
    if (divModulos.children.length > 0) { // Asegurarse de que haya módulos antes de añadir el div
        contenedorBtns.appendChild(divModulos);
    }
}

// Función para mostrar el menú de cada módulo
function mostrarMenuModulo(modulo) {
    moduloActual = modulo;
    contenedorBtns.innerHTML = "";
    
    const opciones = ["Examen", "Material", "FORO", "EVIDENCIA", "volver"];
    
    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton-supervisor");
        nuevoBoton.classList.add(opcion === "volver" ? "boton-supervisor-volver" : "boton-supervisor-opcion");
        nuevoBoton.textContent = opcion;
        
        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuProgramaLiderazgo);
        } else {
            nuevoBoton.addEventListener("click", () => {
                const accion = opcion.toLowerCase();
                switch(accion) {
                    case 'evidencia':
                        mostrarFormularioEvidencia();
                        break;
                    case 'examen':
                        alert('Accediendo al examen del módulo ' + modulo);
                        break;
                    case 'material':
                        alert('Descargando material del módulo ' + modulo);
                        break;
                    case 'foro':
                        alert('Accediendo al foro del módulo ' + modulo);
                        break;
                }
            });
        }
        
        contenedorBtns.appendChild(nuevoBoton);
    });
}

// Función para mostrar el formulario de evidencia
function mostrarFormularioEvidencia() {
    contenedorBtns.innerHTML = `
        <div class="form-evidencia-wrapper">
            <div class="form-evidencia evidencia-container">
                <div class="evidencia-header">
                    <h3 class="evidencia-titulo">Subir Evidencia - ${moduloActual}</h3>
                </div>
                <div class="evidencia-content">
                    <div class="tarea-container">
                        <label class="evidencia-label">Tarea 1:</label>
                        <div class="upload-controls evidencia-controls">
                            <input type="file" id="fileInput" class="file-input evidencia-input">
                            <div class="evidencia-buttons">
                                <button id="btnSubir" class="boton-supervisor boton-supervisor-accion evidencia-btn evidencia-btn-subir">Subir</button>
                                <button id="btnCancelar" class="boton-supervisor boton-supervisor-accion evidencia-btn evidencia-btn-cancelar">Cancelar</button>
                            </div>
                        </div>
                        <p id="selectedFileName" class="evidencia-filename"></p>
                    </div>
                </div>
            </div>
        </div>
        <button id="btnVolverEvidencia" class="boton-supervisor-volver">Volver</button>
    `;
    
    configurarControlArchivos();
}

// Función para configurar el control de archivos
function configurarControlArchivos() {
    const fileInput = document.getElementById('fileInput');
    const btnSubir = document.getElementById('btnSubir');
    const btnCancelar = document.getElementById('btnCancelar');
    const selectedFileName = document.getElementById('selectedFileName');
    const btnVolver = document.getElementById('btnVolverEvidencia');

    btnSubir.style.display = 'none';
    btnCancelar.style.display = 'none';

    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            selectedFileName.textContent = 'Archivo seleccionado: ' + this.files[0].name;
            btnSubir.style.display = 'block';
            btnCancelar.style.display = 'block';
        } else {
            limpiarSeleccionArchivo();
        }
    });

    btnSubir.addEventListener('click', function() {
        alert('Archivo subido exitosamente');
        limpiarSeleccionArchivo();
        mostrarMenuModulo(moduloActual);
    });

    btnCancelar.addEventListener('click', limpiarSeleccionArchivo);
    btnVolver.addEventListener('click', () => mostrarMenuModulo(moduloActual));
}

// Función para limpiar la selección de archivo
function limpiarSeleccionArchivo() {
    const fileInput = document.getElementById('fileInput');
    const selectedFileName = document.getElementById('selectedFileName');
    const btnSubir = document.getElementById('btnSubir');
    const btnCancelar = document.getElementById('btnCancelar');

    fileInput.value = '';
    selectedFileName.textContent = '';
    btnSubir.style.display = 'none';
    btnCancelar.style.display = 'none';
}

// Función para mostrar el menú de Calendario
function mostrarMenuCalendario() {
    contenedorBtns.innerHTML = "";
    const opciones = ["Ver Calendario", "Agregar Evento", "volver"];
    
    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton-supervisor", "boton-supervisor-calendario");
        nuevoBoton.textContent = opcion;
        
        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else {
            nuevoBoton.addEventListener("click", () => {
                alert(`Función de ${opcion} en desarrollo`);
            });
        }
        
        contenedorBtns.appendChild(nuevoBoton);
    });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    contenidoDinamico.style.display = 'none';
    contenedorBtns.style.display = 'grid';
    guardarMenuPrincipal();
    agregarEventListeners();
});
