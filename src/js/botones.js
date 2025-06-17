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
        'reporte-planeacion': `
            <h2>Reporte de Planeación Estratégica</h2>
            <p>Contenido detallado sobre los reportes de planeación.</p>
            <div class="programaliderazgo">
                <ul>
                    <li>Meta 1: Alcanzada</li>
                    <li>Meta 2: En progreso</li>
                </ul>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,
        'coaching': `
            <h2>Sesiones de Coaching</h2>
            <p>Información sobre las sesiones de coaching disponibles.</p>
            <div class="programaliderazgo">
                <button class="sub-boton" data-accion="agendar">Agendar Sesión</button>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,
        'personalidad-liderazgo': `
            <div class="titulosprogramaL personalidad">
                <h2>Personalidad y Liderazgo</h2>
                <p>Explora recursos sobre tipos de personalidad y estilos de liderazgo.</p>
            </div>
            <div class="programaliderazgo">
                <button class="sub-boton" data-accion="insights">Reporte Insights Discovery</button>
                <button class="sub-boton" data-accion="moss">Evaluación test de Moss</button>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,
        'programa-liderazgo': `
            <div class="titulosprogramaL">
                <h2>Programa de Liderazgo</h2>
                <p>Detalles del programa de desarrollo de liderazgo.</p>
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
                <button class="sub-boton boton1" data-accion="examen">Examen</button>
                <button class="sub-boton boton1" data-accion="material">Material</button>
                <button class="sub-boton boton1" data-accion="foro">FORO</button>
                <button class="sub-boton boton1" data-accion="evidencia">EVIDENCIA</button>
                <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        contenidoDinamico.style.display = 'grid';
        estadoNavegacionActual.nivel = 2;
        estadoNavegacionActual.idPrevio = 'programa-liderazgo';
    }

    function mostrarFormularioEvidencia() {
        const html = `
            <div class="form-evidencia gerencial-evidencia">
                <div class="gerencial-evidencia-header">
                    <h3 class="gerencial-evidencia-titulo">Subir Evidencia - Módulo ${moduloActual}</h3>
                </div>
                <div class="gerencial-evidencia-content">
                    <div class="tarea-container">
                        <label class="gerencial-evidencia-label">Tarea 1:</label>
                        <div class="upload-controls gerencial-evidencia-controls">
                            <input type="file" id="fileInput" class="file-input gerencial-evidencia-input">
                            <div class="gerencial-evidencia-buttons">
                                <button id="btnSubir" class="sub-boton boton1 gerencial-evidencia-btn">Subir</button>
                                <button id="btnCancelar" class="sub-boton boton1 gerencial-evidencia-btn">Cancelar</button>
                            </div>
                        </div>
                        <p id="selectedFileName" class="gerencial-evidencia-filename"></p>
                    </div>
                    <button class="boton-volver gerencial-evidencia-btn-volver" data-destino="modulo">Volver al Módulo</button>
                </div>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        contenidoDinamico.style.display = 'grid';
        configurarControlArchivos();
    }

    function configurarControlArchivos() {
        const fileInput = document.getElementById('fileInput');
        const btnSubir = document.getElementById('btnSubir');
        const btnCancelar = document.getElementById('btnCancelar');
        const selectedFileName = document.getElementById('selectedFileName');

        btnSubir.style.display = 'none';
        btnCancelar.style.display = 'none';

        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                selectedFileName.textContent = 'Archivo seleccionado: ' + this.files[0].name;
                btnSubir.style.display = 'inline-block';
                btnCancelar.style.display = 'inline-block';
            }
        });

        btnSubir.addEventListener('click', function() {
            alert('Archivo subido exitosamente');
            limpiarSeleccionArchivo();
        });

        btnCancelar.addEventListener('click', limpiarSeleccionArchivo);
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
            mostrarContenidoModulo(modulo);
        }

        // Acciones dentro del módulo
        if (target.matches('[data-accion]')) {
            const accion = target.getAttribute('data-accion');
            if (accion === 'evidencia') {
                mostrarFormularioEvidencia();
            } else {
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