// Elementos del DOM
const contenedorBtns = document.querySelector("#botonesSupervisores");
const contenidoDinamico = document.querySelector('.contenido-dinamico');

// Variables globales
let menuPrincipalHTML = '';
let moduloActual = '';

// Función para guardar el menú principal
function guardarMenuPrincipal() {
    menuPrincipalHTML = contenedorBtns.innerHTML;
}

// Función para mostrar el menú principal
function mostrarMenuPrincipal() {
    contenedorBtns.innerHTML = menuPrincipalHTML;
    contenidoDinamico.style.display = 'none';
    contenedorBtns.style.display = 'grid';
    agregarEventListeners();
}

// Función para agregar event listeners a los botones
function agregarEventListeners() {
    document.querySelectorAll('.boton-supervisor').forEach(boton => {
        boton.addEventListener('click', function() {
            const contenido = this.getAttribute('data-contenido');
            
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

// Función para mostrar el menú de Evaluación de Liderazgo
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
function mostrarMenuProgramaLiderazgo() {
    contenedorBtns.innerHTML = "";
    const modulos = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "Módulo 6", "volver"];
    
    modulos.forEach(modulo => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton-supervisor", "boton-supervisor-modulo");
        nuevoBoton.textContent = modulo;
        
        if (modulo === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else {
            nuevoBoton.addEventListener("click", () => {
                mostrarMenuModulo(modulo);
            });
        }
        
        contenedorBtns.appendChild(nuevoBoton);
    });
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
