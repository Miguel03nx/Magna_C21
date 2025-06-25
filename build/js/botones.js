/**
 * Módulo de gestión de interfaz principal para Gerenciales
 * @description
 * Este módulo maneja toda la navegación y funcionalidad de la interfaz
 * principal para usuarios Gerenciales, incluyendo:
 * - Navegación entre niveles
 * - Gestión de contenido dinámico
 * - Manejo de descargas y acciones especiales
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Referencias principales a elementos del DOM
     */
    // Contenedor principal de botones de navegación
    const botonesPrincipalesContainer = document.querySelector('.botonesG');
    
    // Lista de todos los botones principales de navegación
    const botonesPrincipales = document.querySelectorAll('.botonesG .boton1');
    
    // Contenedor para el contenido dinámico que cambia según la navegación
    const contenidoDinamico = document.querySelector('.contenido-dinamico');



    /**
     * Estado de navegación global
     * @type {Object}
     * @property {number} nivel - Nivel actual de navegación:
     *                           0: Menú Principal
     *                           1: Primer nivel (Calendario, Reporte, Lista de Módulos)
     *                           2: Segundo nivel (Contenido específico de módulo)
     * @property {string|null} idPrevio - ID del contenido anterior para navegación
     */
    let estadoNavegacionActual = {
        nivel: 0,
        idPrevio: null
    };

    /**
     * Maneja la descarga del calendario
     * @returns {boolean} false - Para prevenir comportamiento por defecto
     * @description
     * Actualmente muestra una alerta, pero está preparado para
     * integrarse con la funcionalidad de descarga del backend
     */
    function descargarCalendario() {
        alert('Descargando png');
        // TODO: Implementar integración con backend para descarga
        return false;
    }

    /**
     * Maneja la descarga del reporte de planeación
     * @returns {boolean} false - Para prevenir comportamiento por defecto
     * @description
     * Actualmente muestra una alerta, pero está preparado para
     * integrarse con la funcionalidad de descarga del backend
     */
    function descargarReporte() {
        alert('Descargando pdf');
        // TODO: Implementar integración con backend para descarga
        return false;
    }

    /**
     * Abre la ventana de coaching en una nueva pestaña
     * @returns {boolean} false - Para prevenir comportamiento por defecto
     * @description
     * Redirige al usuario a la página de coaching de Concepto21
     */
    function abrirCoaching() {
        window.open('https://concepto21.com/coaching', '_blank');
        return false;
    }

    /**
     * Definición de contenidos dinámicos
     * @type {Object}
     * @description
     * Este objeto contiene todo el HTML que se mostrará en el contenedor dinámico
     * para cada sección. Los valores false indican que esa sección será manejada
     * por una función específica en lugar de mostrar contenido estático.
     */
    const contenidos = {
        // Acciones especiales manejadas por funciones
        'calendario': false,           // Manejado por descargarCalendario()
        'reporte-planeacion': false,   // Manejado por descargarReporte()
        'coaching': false,             // Manejado por abrirCoaching()
        

        'personalidad-liderazgo': `
            <div class="titulosprogramaL personalidad">
                <h2></h2>
                <p><p>
            </div>            <div class="programaliderazgo">
                <button class="sub-boton accion-final-boton" 
                        data-action="download" 
                        data-file-type="pdf"
                        data-api-endpoint="/api/insights-discovery">Reporte Insights Discovery</button>
                <button class="sub-boton accion-final-boton" 
                        data-action="download" 
                        data-file-type="pdf"
                        data-api-endpoint="/api/moss-test">Evaluacion test de Moss</button>
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,

        // ESTE ES EL CONTENIDO PARA EL BOTÓN 'programa-liderazgo' (NIVEL 1)
        // CONTIENE BOTONES QUE NAVEGAN A UN SIGUIENTE NIVEL (MÓDULOS)
        'programa-liderazgo': `
            <div class="titulosprogramaL">
                <h2>Programa de Liderazgo</h2>
                <p></p>
            </div>
            <div class="programaliderazgo">
                <button class="sub-boton sub-boton-navegacion" data-siguiente-nivel="modulo1">Módulo 1</button>

                <button class="sub-boton sub-boton-navegacion" data-siguiente-nivel="modulo2">Módulo 2</button>

                <button class="sub-boton sub-boton-navegacion" data-siguiente-nivel="modulo3">Módulo 3</button>

                <button class="sub-boton sub-boton-navegacion" data-siguiente-nivel="modulo4">Módulo 4</button>

                <button class="sub-boton sub-boton-navegacion" data-siguiente-nivel="modulo5">Módulo 5</button>
                
                <button class="boton-volver" data-destino="principal">Volver al Menú Principal</button>
            </div>
        `,
        
        // NUEVOS CONTENIDOS PARA EL NIVEL 2 (MÓDULOS INDIVIDUALES)
        // CADA UNO CONTIENE BOTONES DE ACCIÓN FINAL Y UN BOTÓN VOLVER ESPECÍFICO        // MÓDULO 1: Contenido y botones con atributos para integración
        'modulo1': `
            <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 1</h3>
            </div>

            <div class="contenidoModulo">
            <!-- El botón Examen está preparado para integración con Google Forms -->
            <button class="sub-boton accion-final-boton" 
                    data-action="forms" 
                    data-module="1" 
                    data-api-endpoint="/api/exam/module1">Examen</button>
            
            <!-- El botón Material mostrará alerta de descarga PDF -->
            <button class="sub-boton accion-final-boton"
                    data-action="download"
                    data-file-type="pdf"
                    data-module="1"
                    data-api-endpoint="/api/material/module1">Material</button>
            
            <!-- El botón FORO mantiene su funcionalidad actual -->
            <button class="sub-boton accion-final-boton"
                    data-action="forum"
                    data-module="1">FORO</button>
              <button class="sub-boton accion-final-boton" data-action="evidencia" data-module="1">EVIDENCIA</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver al Programa de Liderazgo</button>
            </div>
        `,

        // MÓDULO 2: Similar configuraciónal Módulo 1
        'modulo2': `
             <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 2</h3>
            </div>
            
            <div class="contenidoModulo">
            <button class="sub-boton accion-final-boton"
                    data-action="forms"
                    data-module="2"
                    data-api-endpoint="/api/exam/module2">Examen</button>
            
            <button class="sub-boton accion-final-boton"
                    data-action="download"
                    data-file-type="pdf"
                    data-module="2"
                    data-api-endpoint="/api/material/module2">Material</button>
              <button class="sub-boton accion-final-boton"
                    data-action="forum"
                    data-module="2">FORO</button>
            
            <button class="sub-boton accion-final-boton" 
                    data-action="evidencia" 
                    data-module="2">EVIDENCIA</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver al Programa de Liderazgo</button>
            </div>
        `,

        // MÓDULO 3: Similar configuración
        'modulo3': `
            <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 3</h3>
            </div>

            <div class="contenidoModulo">
            <button class="sub-boton accion-final-boton"
                    data-action="forms"
                    data-module="3"
                    data-api-endpoint="/api/exam/module3">Examen</button>
            
            <button class="sub-boton accion-final-boton"
                    data-action="download"
                    data-file-type="pdf"
                    data-module="3"
                    data-api-endpoint="/api/material/module3">Material</button>
              <button class="sub-boton accion-final-boton"
                    data-action="forum"
                    data-module="3">FORO</button>
            <button class="sub-boton accion-final-boton" 
                    data-action="evidencia" 
                    data-module="3">EVIDENCIA</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver al Programa de Liderazgo</button>
            </div>
        `,

        // MÓDULO 4: Similar configuración
        'modulo4': `
             <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 4</h3>
            </div>

            <div class="contenidoModulo">
            <button class="sub-boton accion-final-boton"
                    data-action="forms"
                    data-module="4"
                    data-api-endpoint="/api/exam/module4">Examen</button>
            
            <button class="sub-boton accion-final-boton"
                    data-action="download"
                    data-file-type="pdf"
                    data-module="4"
                    data-api-endpoint="/api/material/module4">Material</button>
              <button class="sub-boton accion-final-boton"
                    data-action="forum"
                    data-module="4">FORO</button>
            <button class="sub-boton accion-final-boton" 
                    data-action="evidencia" 
                    data-module="4">EVIDENCIA</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver al Programa de Liderazgo</button>
            </div>
        `,// MÓDULO 5: Similar configuración
        'modulo5': `
            <div class="titulosprogramaL modulog">
                <h3>Contenido del Módulo 5</h3>
            </div>
            <div class="contenidoModulo">
                <button class="sub-boton accion-final-boton" data-action="forms" data-module="5" data-api-endpoint="/api/exam/module5">Examen</button>
                <button class="sub-boton accion-final-boton" data-action="download" data-file-type="pdf" data-module="5" data-api-endpoint="/api/material/module5">Material</button>
                <button class="sub-boton accion-final-boton" data-action="forum" data-module="5">FORO</button>
                <button class="sub-boton accion-final-boton" data-action="evidencia" data-module="5">EVIDENCIA</button>
                <button class="boton-volver" data-destino="programa-liderazgo">Volver al Programa de Liderazgo</button>
            </div>
        `

        
    }; // aqui termina el objeto de contenidos    // Función para mostrar un contenido específico
    function mostrarContenido(keyContenido) {
        // Manejo especial para botones con acciones directas
        if (keyContenido === 'calendario') {
            descargarCalendario();
            return;
        }
        if (keyContenido === 'reporte-planeacion') {
            descargarReporte();
            return;
        }
        if (keyContenido === 'coaching') {
            abrirCoaching();
            return;
        }

        // Verifica si la clave existe en nuestro objeto 'contenidos'
        if (contenidos[keyContenido]) {
            // Oculta el contenedor de los botones principales SOLO SI VIENES DEL MENÚ PRINCIPAL
            if (estadoNavegacionActual.nivel === 0) {
                botonesPrincipalesContainer.style.display = 'none';
            }

            // Inyecta el HTML correspondiente en el contenedor dinámico
            contenidoDinamico.innerHTML = contenidos[keyContenido];
            // Asegura que el contenedor dinámico sea visible Y MANTIENE EL DISPLAY EN GRID / block
            // ESTO HACE QUE LOS BOTONES DE LOS SIGUIENTES SUBMENU SE CAMBIE A grid
            contenidoDinamico.style.display = 'grid';

            // ACTUALIZAR EL ESTADO DE NAVEGACIÓN: QUÉ NIVEL Y QUIÉN ES EL PADRE
            if (keyContenido.startsWith('modulo')) { // Si es un módulo (Nivel 2)
                estadoNavegacionActual.nivel = 2;
                estadoNavegacionActual.idPrevio = 'programa-liderazgo'; // Su padre es el "Programa de Liderazgo"
            } else if (keyContenido === 'programa-liderazgo' || keyContenido === 'calendario' ||
                       keyContenido === 'reporte-planeacion' || keyContenido === 'coaching' ||
                       keyContenido === 'personalidad-liderazgo') { // Si es un contenido de Nivel 1
                estadoNavegacionActual.nivel = 1;
                estadoNavegacionActual.idPrevio = 'principal'; // Su padre es el menú principal
            } else { // Caso de contenido no esperado, por seguridad
                estadoNavegacionActual.nivel = 0;
                estadoNavegacionActual.idPrevio = null;
            }

            // Manejo del botón "Volver"
            const botonVolver = contenidoDinamico.querySelector('.boton-volver');
            if (botonVolver) {
                // SE AÑADE UN LISTENER A LA FUNCIÓN 'volver' QUE RECIBE EL DESTINO DESDE EL DATA-DESTINO DEL BOTÓN
                const destino = botonVolver.dataset.destino;
                botonVolver.addEventListener('click', () => volver(destino));
            }

            // NUEVO: MANEJO DE BOTONES QUE NAVEGAN A UN SIGUIENTE NIVEL (ej. Módulos 1, 2, 3, 4)
            const subBotonesNavegacion = contenidoDinamico.querySelectorAll('.sub-boton-navegacion');
            subBotonesNavegacion.forEach(boton => {
                boton.addEventListener('click', () => {
                    const siguienteNivelKey = boton.dataset.siguienteNivel;
                    mostrarContenido(siguienteNivelKey); // LLAMADA RECURSIVA PARA PROFUNDIZAR
                });
            });            // Funciones específicas para cada tipo de botón en los submódulos
            function handleExamenClick(modulo) {
                // TODO: Aquí se integrará con Google Forms
                // La URL del forms se configurará desde el backend
                console.log(`Preparado para abrir Google Forms del módulo ${modulo}`);
                alert('Redirigiendo a evaluación...');
            }            function handlePdfDownload() {
                alert('descargando pdf');
                // TODO: Aquí irá la lógica de descarga cuando se integre con el backend
                // La estructura permitirá integrar fácilmente con el backend más adelante:
                // const apiEndpoint = boton.dataset.apiEndpoint;
                // fetch(apiEndpoint)
                //     .then(response => response.blob())
                //     .then(blob => {
                //         const url = window.URL.createObjectURL(blob);
                //         const a = document.createElement('a');
                //         a.href = url;
                //         a.download = 'reporte.pdf';
                //         a.click();
                //     });
            }// MANEJO DE BOTONES DE ACCIÓN FINAL (ej. Examen, Material, Foro, etc.)
            const accionFinalBotones = contenidoDinamico.querySelectorAll('.accion-final-boton');
            accionFinalBotones.forEach(boton => {
                boton.addEventListener('click', (event) => {
                    event.preventDefault();
                    const action = boton.dataset.action;
                    const module = boton.dataset.module;
                      switch(action) {
                        case 'forms':
                            handleExamenClick(module);
                            break;
                        case 'download':
                            if (boton.dataset.fileType === 'pdf') {
                                handlePdfDownload();
                            }
                            break;
                        case 'forum':
                            alert('Abriendo foro...');
                            break;
                        case 'evidencia':
                            mostrarFormularioEvidencia(module);
                            break;
                        default:
                            console.log('Acción no reconocida:', action);
                    }
                });
            });

            // MANEJO DE OTROS SUB-BOTONES NORMALES (si los hay y no son de navegación o acción final)
            const subBotonesNormales = contenidoDinamico.querySelectorAll('.sub-boton');
            subBotonesNormales.forEach(subBoton => {
                subBoton.addEventListener('click', (event) => {
                    const accion = event.target.dataset.accion;
                    alert(`Has hecho clic en un sub-botón normal: ${accion}`);
                });
            });

        } else {
            // Si la clave no existe (por si hay un error en el data-contenido)
            contenidoDinamico.innerHTML = `<p>Contenido no encontrado para: ${keyContenido}</p>`;
            contenidoDinamico.style.display = 'grid'; // ASEGURA QUE SIEMPRE SEA GRID
        }
    }

    // NUEVA FUNCIÓN PARA RETROCEDER ENTRE NIVELES DE NAVEGACIÓN
    function volver(destino) {
        if (destino === 'principal') {
            // Vuelve al menú principal (Nivel 0)
            botonesPrincipalesContainer.style.display = 'flex'; // VUELVE A MOSTRAR CON GRID
            contenidoDinamico.innerHTML = `<p>Selecciona una opción del menú superior.</p>`;
            contenidoDinamico.style.display = 'none'; // OCULTA EL CONTENIDO DINÁMICO
            botonesPrincipales.forEach(b => b.classList.remove('activo'));
            estadoNavegacionActual.nivel = 0;
            estadoNavegacionActual.idPrevio = null;
        } else {
            // Vuelve a un nivel intermedio (Nivel 1 o 2 anterior)
            mostrarContenido(destino); // Recarga el contenido del nivel anterior
        }
    }

    // Añadir Event Listeners a los botones principales
    // Iteramos sobre cada botón principal que seleccionamos al inicio
    botonesPrincipales.forEach(boton => {
        // A cada botón le añadimos un escuchador de eventos para el 'click'
        boton.addEventListener('click', () => {
            // Cuando se hace clic, obtenemos el valor del atributo 'data-contenido' de ese botón
            const keyContenido = boton.dataset.contenido;
            // Llamamos a la función para mostrar el contenido correspondiente
            mostrarContenido(keyContenido);

            // Resaltar el botón principal que fue clicado:
            // Primero, removemos la clase 'activo' de todos los botones principales
            botonesPrincipales.forEach(b => b.classList.remove('activo'));
            // Luego, añadimos la clase 'activo' solo al botón que fue clicado
            boton.classList.add('activo');
        });
    });

    // Estado inicial al cargar la página
    // Asegura que los botones principales estén visibles
    botonesPrincipalesContainer.style.display = 'flex'; // INICIALMENTE CON GRID
    // Y que el contenedor de contenido dinámico esté oculto
    contenidoDinamico.style.display = 'none';

    // OPCIONAL: Cargar contenido por defecto si lo deseas
    // if (botonesPrincipales.length > 0) {
    //     botonesPrincipales[0].click(); // Simula un clic en el primer botón al cargar
    // }    // Función para mostrar el formulario de evidencia
    function mostrarFormularioEvidencia(modulo) {
        const html = `
            <div class="evidencia-gerencial-container">
                <div class="evidencia-gerencial-header">
                    <h3 class="evidencia-gerencial-titulo">Subir Evidencia - Módulo ${modulo}</h3>
                </div>
                <div class="evidencia-gerencial-content">
                    <div class="evidencia-gerencial-form">
                        <label class="evidencia-gerencial-label">Seleccionar archivo:</label>
                        <div class="evidencia-gerencial-upload">
                            <input type="file" id="fileInputGerencial" class="evidencia-gerencial-input" />
                            <div class="evidencia-gerencial-buttons" style="display: none;">
                                <button id="btnSubirGerencial" class="btn-gerencial-subir">Subir</button>
                                <button id="btnCancelarGerencial" class="btn-gerencial-cancelar">Cancelar</button>
                            </div>
                        </div>
                        <p id="fileNameGerencial" class="evidencia-gerencial-filename"></p>
                    </div>
                </div>
                <div class="evidencia-gerencial-footer">
                    <button class="boton-volver" data-destino="modulo${modulo}">Volver al Módulo</button>
                </div>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        setupFormularioEvidencia(modulo);
        
        // Configurar el botón volver
        const botonVolver = contenidoDinamico.querySelector('.boton-volver');
        if (botonVolver) {
            botonVolver.addEventListener('click', () => mostrarContenido('modulo' + modulo));
        }
    }

    // Función para configurar el comportamiento del formulario de evidencia
    function setupFormularioEvidencia(modulo) {
        const fileInput = document.getElementById('fileInputGerencial');
        const btnSubir = document.getElementById('btnSubirGerencial');
        const btnCancelar = document.getElementById('btnCancelarGerencial');
        const fileName = document.getElementById('fileNameGerencial');
        const buttonsContainer = document.querySelector('.evidencia-gerencial-buttons');

        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileName.textContent = 'Archivo seleccionado: ' + this.files[0].name;
                buttonsContainer.style.display = 'flex';
            } else {
                limpiarFormularioEvidencia();
            }
        });

        btnSubir.addEventListener('click', function() {
            // Aquí se implementará la lógica de subida al backend
            alert('Archivo subido exitosamente');
            limpiarFormularioEvidencia();
            mostrarContenido('modulo' + modulo);
        });

        btnCancelar.addEventListener('click', limpiarFormularioEvidencia);
    }

    // Función para limpiar el formulario de evidencia
    function limpiarFormularioEvidencia() {
        const fileInput = document.getElementById('fileInputGerencial');
        const fileName = document.getElementById('fileNameGerencial');
        const buttonsContainer = document.querySelector('.evidencia-gerencial-buttons');
        
        fileInput.value = '';
        fileName.textContent = '';
        buttonsContainer.style.display = 'none';
    }
});