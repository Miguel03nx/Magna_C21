// Seleccionando el contenedor de los botones
const contenedorBtns = document.querySelector("#botonesG");

// Seleccionando todos los botones
document.querySelectorAll('.boton1').forEach(boton => {
    boton.addEventListener('click', function() {
        const contenido = this.getAttribute('data-contenido');
        
        if (contenido === 'evaluacion-liderazgo') {
            mostrarMenuEvaluacionLiderazgo();
        } else if (contenido === 'programa-liderazgo') {
            mostrarMenuProgramaLiderazgo();
        }
    });
});

// Función para mostrar el menú de Evaluación de Liderazgo
function mostrarMenuEvaluacionLiderazgo() {
    contenedorBtns.innerHTML = "";
    
    const opciones = ["Descargar aquí", "volver"];
    
    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.textContent = opcion;
        
        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuPrincipal);
        } else {
            nuevoBoton.addEventListener("click", () => {
                console.log(`Seleccionaste: ${opcion}`);
                // Aquí puedes agregar la lógica para la descarga
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
        nuevoBoton.classList.add("boton1");
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
    contenedorBtns.innerHTML = "";
    
    const opciones = ["Examen", "Material", "FORO", "EVIDENCIA", "volver"];
    
    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.textContent = opcion;
        
        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuProgramaLiderazgo);
        } else {
            nuevoBoton.dataset.accion = opcion.toLowerCase();
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
                    default:
                        console.log(`${modulo} - ${opcion}`);
                }
            });
        }
        
        contenedorBtns.appendChild(nuevoBoton);
    });
}

// Función para volver al menú principal
function mostrarMenuPrincipal() {
    contenedorBtns.innerHTML = `
        <button type="submit" class="boton1" data-contenido="calendario">
            <p>Calendario</p>
        </button>

        <button type="submit" class="boton1" data-contenido="evaluacion-liderazgo">
            <p>Evaluación de Liderazgo</p>
        </button>

        <button type="submit" class="boton1" data-contenido="programa-liderazgo">
            <p>Programa de Liderazgo</p>
        </button>
    `;
    
    // Volver a agregar los event listeners
    document.querySelectorAll('.boton1').forEach(boton => {
        boton.addEventListener('click', function() {
            const contenido = this.getAttribute('data-contenido');
            if (contenido === 'evaluacion-liderazgo') {
                mostrarMenuEvaluacionLiderazgo();
            } else if (contenido === 'programa-liderazgo') {
                mostrarMenuProgramaLiderazgo();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const botonesPrincipalesContainer = document.querySelector('.botonesG');
    const botonesPrincipales = document.querySelectorAll('.botonesG .boton1');
    const contenidoDinamico = document.querySelector('.contenido-dinamico');
    let moduloActual = '';
    let estadoNavegacionActual = {
        nivel: 0,
        idPrevio: null
    };

    // Eliminamos los estilos CSS inline y dejamos solo las clases
    const styles = document.createElement('style');
    styles.textContent = `
        .contenido-dinamico {
            display: none;
        }
    `;
    document.head.appendChild(styles);

    // Objeto contenidos: Define el HTML para cada sección
    const contenidos = {
        'calendario': `
            <h2>Mi Calendario</h2>
            <p>Aquí verás el calendario de eventos y reuniones.</p>
            <div class="programaliderazgo">
                <button class="sub-boton" data-accion="ver-reuniones">Ver Reuniones</button>
                <button class="sub-boton" data-accion="crear-evento">Crear Evento</button>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,
        'evaluacion-liderazgo': `
            <div class="titulosprogramaL">
                <h2>Evaluación de Liderazgo</h2>
                <p>Accede a las evaluaciones y recursos de liderazgo.</p>
            </div>
            <div class="programaliderazgo">
                <button class="sub-boton" data-accion="descargar">Descargar Evaluación</button>
                <button class="sub-boton" data-accion="resultados">Ver Resultados</button>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,
        'programa-liderazgo': `
            <div class="titulosprogramaL">
                <h2>Programa de Liderazgo</h2>
                <p>Detalles del programa de desarrollo de liderazgo para supervisores.</p>
            </div>
            <div class="programaliderazgo">
                <button class="sub-boton sub-boton-navegacion" data-modulo="1">Módulo 1</button>
                <button class="sub-boton sub-boton-navegacion" data-modulo="2">Módulo 2</button>
                <button class="sub-boton sub-boton-navegacion" data-modulo="3">Módulo 3</button>
                <button class="sub-boton sub-boton-navegacion" data-modulo="4">Módulo 4</button>
                <button class="sub-boton sub-boton-navegacion" data-modulo="5">Módulo 5</button>
                <button class="sub-boton sub-boton-navegacion" data-modulo="6">Módulo 6</button>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `
    };

    // Funciones principales
    function mostrarProgramaLiderazgo() {
        botonesPrincipalesContainer.style.display = 'none';
        contenidoDinamico.innerHTML = contenidos['programa-liderazgo'];
        contenidoDinamico.style.display = 'grid';
        estadoNavegacionActual.nivel = 1;
        estadoNavegacionActual.idPrevio = 'principal';
    }
    
    function mostrarContenidoModulo(numeroModulo) {
        moduloActual = numeroModulo;
        const html = `
            <div class="titulosprogramaL modulog">
                <h3>Contenido del Módulo ${numeroModulo}</h3>
                <p>Aquí tienes las opciones para el Módulo ${numeroModulo}.</p>
            </div>
            <div class="programaliderazgo">
                <button class="sub-boton" data-accion="examen">Examen</button>
                <button class="sub-boton" data-accion="material">Material</button>
                <button class="sub-boton" data-accion="foro">FORO</button>
                <button class="sub-boton" data-accion="evidencia">EVIDENCIA</button>
                <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        contenidoDinamico.style.display = 'grid';
        
        // Asegurarse de que los botones tengan sus event listeners
        const botones = contenidoDinamico.querySelectorAll('.sub-boton');
        botones.forEach(boton => {
            if(boton.dataset.accion === 'evidencia') {
                boton.addEventListener('click', () => mostrarFormularioEvidencia());
            }
        });
        estadoNavegacionActual.nivel = 2;
        estadoNavegacionActual.idPrevio = 'programa-liderazgo';
    }
    
    function mostrarFormularioEvidencia() {
        contenedorBtns.innerHTML = "";
        
        const html = `
            <div class="form-evidencia-wrapper">
                <div class="form-evidencia evidencia-container">
                    <div class="evidencia-header">
                        <h3 class="evidencia-titulo">Subir Evidencia - Módulo ${moduloActual}</h3>
                    </div>
                    <div class="evidencia-content">
                        <div class="tarea-container">
                            <label class="evidencia-label">Tarea 1:</label>
                            <div class="upload-controls evidencia-controls">
                                <input type="file" id="fileInput" class="file-input evidencia-input">
                                <div class="evidencia-buttons">
                                    <button id="btnSubir" class="boton1 evidencia-btn evidencia-btn-subir">Subir</button>
                                    <button id="btnCancelar" class="boton1 evidencia-btn evidencia-btn-cancelar">Cancelar</button>
                                </div>
                            </div>
                            <p id="selectedFileName" class="evidencia-filename"></p>
                        </div>
                    </div>
                </div>
            </div>
            <button id="btnVolverEvidencia" class="boton1" style="margin-left: 20px;">Volver</button>
        `;
        
        // Agregar estilos específicos para el formulario de evidencia
        const styles = document.createElement('style');
        styles.id = 'evidencia-styles';  // Añadimos un ID para poder eliminarlo después
        styles.textContent = `
            .form-evidencia-wrapper {
                text-align: left;
                max-width: 600px;
                margin: 0;
                padding: 20px 0 20px 20px;
            }
            .evidencia-container {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .evidencia-titulo {
                margin: 0 0 20px 0;
                color: #333;
            }
            .tarea-container {
                margin-bottom: 20px;
            }
            .evidencia-label {
                display: block;
                margin-bottom: 10px;
                font-weight: bold;
            }
            .evidencia-controls {
                margin-bottom: 15px;
            }
            .evidencia-buttons {
                margin-top: 15px;
            }
            .evidencia-btn {
                margin-right: 10px;
            }
            .evidencia-filename {
                margin-top: 10px;
                font-size: 0.9em;
                color: #666;
            }
        `;
        document.head.appendChild(styles);
          contenedorBtns.innerHTML = html;
        
        // Configurar el botón volver
        document.getElementById('btnVolverEvidencia').addEventListener('click', () => {
            // Remover los estilos específicos del formulario
            const evidenciaStyles = document.getElementById('evidencia-styles');
            if (evidenciaStyles) {
                document.head.removeChild(evidenciaStyles);
            }
            mostrarMenuModulo(moduloActual);
        });
        
        configurarControlArchivos();
    }function configurarControlArchivos() {
        const fileInput = document.getElementById('fileInput');
        const btnSubir = document.getElementById('btnSubir');
        const btnCancelar = document.getElementById('btnCancelar');
        const selectedFileName = document.getElementById('selectedFileName');

        // Inicialmente ocultos
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
            // Volver al menú del módulo después de subir
            volverAlMenuModulo();
        });

        btnCancelar.addEventListener('click', function() {
            limpiarSeleccionArchivo();
        });
    }

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

    // Función para volver al menú del módulo desde el formulario de evidencia
    function volverAlMenuModulo() {
        mostrarMenuModulo(moduloActual);
    }

    function mostrarContenido(keyContenido) {
        if (contenidos[keyContenido]) {
            botonesPrincipalesContainer.style.display = 'none';
            contenidoDinamico.innerHTML = contenidos[keyContenido];
            contenidoDinamico.style.display = 'grid';
            estadoNavegacionActual.nivel = 1;
            estadoNavegacionActual.idPrevio = 'principal';
        } else {
            contenidoDinamico.innerHTML = `<p>Contenido no encontrado para: ${keyContenido}</p>`;
            contenidoDinamico.style.display = 'grid';
        }
    }

    function volver(destino) {
        if (destino === 'principal') {
            botonesPrincipalesContainer.style.display = 'grid';
            contenidoDinamico.innerHTML = '<p>Selecciona una opción del menú superior.</p>';
            contenidoDinamico.style.display = 'none';
            botonesPrincipales.forEach(b => b.classList.remove('activo'));
            estadoNavegacionActual.nivel = 0;
            estadoNavegacionActual.idPrevio = null;
        } else if (destino === 'programa-liderazgo') {
            mostrarProgramaLiderazgo();
        } else if (destino === 'modulo') {
            mostrarContenidoModulo(moduloActual);
        } else {
            mostrarContenido(destino);
        }
    }
    
    // Event listeners
    document.addEventListener('click', function(e) {
        const target = e.target;

    // Botones de módulos
        if (target.matches('.sub-boton-navegacion')) {
            const modulo = target.getAttribute('data-modulo');
            mostrarMenuModulo(modulo); // Cambiamos a mostrarMenuModulo
        }

        // Acciones dentro del módulo
        if (target.matches('[data-accion]')) {
            const accion = target.getAttribute('data-accion');
            switch(accion) {
                case 'evidencia':
                    mostrarFormularioEvidencia();
                    break;
                case 'foro':
                    alert('Accediendo al foro del módulo ' + moduloActual);
                    break;
                case 'examen':
                    alert('Accediendo al examen del módulo ' + moduloActual);
                    break;
                case 'material':
                    alert('Descargando material del módulo ' + moduloActual);
                    break;
                default:
                    alert(`Acción seleccionada: ${accion}`);
            }
        }

        // Botones volver
        if (target.matches('.boton-volver')) {
            const destino = target.getAttribute('data-destino');
            volver(destino);
        }
    });

    // Event listeners para botones principales
    botonesPrincipales.forEach(boton => {
        boton.addEventListener('click', () => {
            const keyContenido = boton.dataset.contenido;
            
            if (keyContenido === 'programa-liderazgo') {
                mostrarProgramaLiderazgo();
            } else {
                mostrarContenido(keyContenido);
            }

            botonesPrincipales.forEach(b => b.classList.remove('activo'));
            boton.classList.add('activo');
        });
    });

    // Estado inicial
    botonesPrincipalesContainer.style.display = 'grid';
    contenidoDinamico.style.display = 'none';
});
