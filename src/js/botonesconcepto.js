/**
 * Módulo principal para la gestión de la interfaz de Concepto21
 * Este módulo maneja toda la interacción del usuario con la sección de Concepto,
 * incluyendo la navegación entre módulos, gestión de tareas y exámenes tanto para
 * Gerenciales como para Supervisores.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Contenedor principal de botones en la interfaz
    const botonesContainer = document.querySelector('#botonesConcepto');
    
    // Contenedor donde se mostrará el contenido dinámico según la interacción
    const contenidoDinamico = document.querySelector('#contenidoDinamico');
    
    // Referencias a las plantillas HTML para las tablas de tareas y exámenes
    // Estas plantillas contienen la estructura HTML base para cada vista
    const tablaTareasGerencialesTemplate = document.querySelector('#tabla-tareas-gerenciales-template');
    const tablaTareasSupervisoresTemplate = document.querySelector('#tabla-tareas-supervisores-template');
    const tablaExamenesGerencialesTemplate = document.querySelector('#tabla-examenes-gerenciales-template');
    const tablaExamenesSupervisoresTemplate = document.querySelector('#tabla-examenes-supervisores-template');
    
    /**
     * Variables de estado global
     */
    
    // Almacena el tipo de usuario actual ('Gerenciales' o 'Supervisores')
    let tipoActual = '';
    
    // Almacena el número del módulo actual seleccionado (1-6)
    let moduloActual = '';

    /**
     * Muestra la interfaz de módulos según el tipo de usuario
     * @param {string} tipo - Tipo de usuario ('Gerenciales' o 'Supervisores')
     * @description
     * Esta función es responsable de:
     * 1. Actualizar el tipo de usuario actual
     * 2. Generar los botones específicos según el tipo (incluyendo Calendario y Pers y Lid para Gerenciales)
     * 3. Mostrar la interfaz de módulos correspondiente
     */
    function mostrarModulos(tipo) {
        tipoActual = tipo;
        console.log('Mostrando módulos para tipo:', tipo);
        
        // Botones adicionales exclusivos para usuarios Gerenciales
        const botonesExtra = tipo === 'Gerenciales' ? `
            <button class="boton-concepto boton-concepto-calendario">Calendario</button>
            <button class="boton-concepto boton-concepto-persylid">Pers y Lid</button>
        ` : '';
        
        // Construcción del HTML para la interfaz de módulos
        const html = `
            <div class="concepto-modulos-container">
                <div class="concepto-titulo">
                    <h2 class="titulomodulos">Módulos de ${tipo}</h2>
                    ${tipo === 'Gerenciales' ? '<span class="tipo-indicador">Vista de Gerenciales</span>' : ''}
                </div>
                <div class="concepto-modulos-grid">
                    <div class="concepto-modulos-botones">
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="1">Módulo 1</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="2">Módulo 2</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="3">Módulo 3</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="4">Módulo 4</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="5">Módulo 5</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="6">Módulo 6</button>
                        ${botonesExtra}
                    </div>
                </div>
                <button class="boton-concepto boton-concepto-volver">Volver</button>
            </div>
        `;
        
        // Actualizar la interfaz
        contenidoDinamico.innerHTML = html;
        contenidoDinamico.style.display = 'block';
        botonesContainer.style.display = 'none';
    }

    /**
     * Muestra las opciones disponibles para un módulo específico
     * @param {string} numeroModulo - Número del módulo seleccionado (1-6)
     * @description
     * Genera la interfaz que muestra las opciones disponibles para un módulo:
     * - Tareas
     * - Exámenes
     * Incluye un botón para volver al menú de módulos
     */
    function mostrarOpcionesModulo(numeroModulo) {
        moduloActual = numeroModulo;
        const html = `
            <div class="concepto-opciones-container">
                <div class="concepto-titulo">
                    <h2>Módulo ${numeroModulo}</h2>
                </div>
                <div class="concepto-opciones-grid">
                    <div class="concepto-opciones-botones">
                        <button class="boton-concepto boton-concepto-opcion" data-opcion="tareas">Tareas</button>
                        <button class="boton-concepto boton-concepto-opcion" data-opcion="examenes">Exámenes</button>
                    </div>
                </div>
                <button class="boton-concepto boton-concepto-volver" data-nivel="modulos">Volver</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
    }

    /**
     * Muestra la tabla de tareas según el tipo de usuario actual
     * @description
     * Determina si el usuario es Gerencial o Supervisor y muestra la tabla
     * correspondiente con las tareas específicas para ese tipo de usuario.
     * Incluye indicadores visuales del tipo de vista y controles de archivo.
     */
    function mostrarTablaTareas() {
        const esGerencial = tipoActual.toLowerCase() === 'gerenciales';
        const templateId = esGerencial ? 'tabla-tareas-gerenciales-template' : 'tabla-tareas-supervisores-template';
        const tablaTemplate = document.querySelector(`#${templateId}`);
        
        console.log('Mostrando tabla de tareas para:', tipoActual);
        
        const tablaClone = tablaTemplate.content.cloneNode(true);
        const container = document.createElement('div');
        container.className = `concepto-vista-tareas ${esGerencial ? 'vista-gerencial' : 'vista-supervisor'}`;
        container.innerHTML = `
            <div class="concepto-titulo">
                <h2>${tipoActual} - Módulo ${moduloActual}</h2>
                <span class="tipo-indicador">${esGerencial ? 'Vista de Gerenciales' : 'Vista de Supervisores'}</span>
            </div>
        `;
        container.appendChild(tablaClone);
        container.innerHTML += `
            <button class="boton-concepto boton-concepto-volver" data-nivel="opciones">Volver</button>
        `;
        contenidoDinamico.innerHTML = '';
        contenidoDinamico.appendChild(container);
    }    /**
     * Muestra la tabla de exámenes específica según el tipo de usuario
     * @description
     * Similar a mostrarTablaTareas, pero para exámenes:
     * 1. Determina el tipo de usuario actual
     * 2. Selecciona la plantilla correcta
     * 3. Configura los controles de archivo específicos
     * 4. Muestra indicadores visuales del tipo de vista
     */
    function mostrarTablaExamenes() {
        const esGerencial = tipoActual.toLowerCase() === 'gerenciales';
        const template = esGerencial ? tablaExamenesGerencialesTemplate : tablaExamenesSupervisoresTemplate;
        
        console.log('Mostrando tabla de exámenes para:', tipoActual);
        
        const tablaClone = template.content.cloneNode(true);
        const container = document.createElement('div');
        container.className = `concepto-vista-examenes ${esGerencial ? 'vista-examenes-gerencial' : 'vista-examenes-supervisor'}`;
        container.innerHTML = `
            <div class="concepto-titulo">
                <h2>${tipoActual} - Módulo ${moduloActual}</h2>
                <span class="tipo-indicador">${esGerencial ? 'Exámenes de Gerenciales' : 'Exámenes de Supervisores'}</span>
            </div>
        `;
        container.appendChild(tablaClone);
        container.innerHTML += `
            <button class="boton-concepto boton-concepto-volver" data-nivel="opciones">Volver</button>
        `;
        contenidoDinamico.innerHTML = '';
        contenidoDinamico.appendChild(container);

        // Configurar los controles de archivo después de insertar el contenido
        configurarControlesArchivo();
    }

    /**
     * Configura los controles de archivo para subida de documentos
     * @description
     * Configura los event listeners y la lógica para:
     * 1. Mostrar/ocultar botones de subida
     * 2. Manejar la selección de archivos
     * 3. Procesar la subida o cancelación
     * Aplica diferentes estilos según el tipo de usuario
     */
    function configurarControlesArchivo() {
        const esGerencial = tipoActual.toLowerCase() === 'gerenciales';
        const prefix = esGerencial ? 'gerencial' : 'supervisor';
        const tipoTexto = esGerencial ? 'Gerencial' : 'Supervisor';
        
        console.log('Configurando controles de archivo para:', tipoTexto);
        
        document.querySelectorAll(`.${prefix}-file`).forEach((input, index) => {
            const uploadButtons = input.nextElementSibling;
            const btnSubir = uploadButtons.querySelector('.btn-subir');
            const btnCancelar = uploadButtons.querySelector('.btn-cancelar');
            
            // Aplicar estilos específicos según el tipo
            btnSubir.classList.add(`btn-${prefix}`);
            uploadButtons.dataset.tipo = tipoTexto;

            // Event listener para mostrar botones cuando se selecciona un archivo
            input.addEventListener('change', function() {
                if (this.files.length > 0) {
                    uploadButtons.style.display = 'flex';
                }
            });

            // Event listener para el botón de subir
            btnSubir.addEventListener('click', function() {
                alert('Archivo subido exitosamente');
                input.value = '';
                uploadButtons.style.display = 'none';
            });

            // Event listener para el botón de cancelar
            btnCancelar.addEventListener('click', function() {
                input.value = '';
                uploadButtons.style.display = 'none';
            });
        });
    }

    /**
     * Muestra el formulario para subir el calendario (exclusivo de Gerenciales)
     * @description
     * Genera y muestra un formulario que permite:
     * 1. Seleccionar un archivo PNG para el calendario
     * 2. Previsualizar el nombre del archivo seleccionado
     * 3. Subir o cancelar la operación
     * Incluye validaciones de tipo de archivo
     */
    function mostrarFormularioCalendario() {
        const html = `
            <div class="concepto-calendario-container">
                <div class="concepto-titulo">
                    <h2>Subir Calendario</h2>
                </div>
                <div class="concepto-calendario-form">
                    <div class="concepto-calendario-upload">
                        <label class="concepto-calendario-label">Seleccionar archivo PNG:</label>
                        <input type="file" id="calendarioInput" class="concepto-calendario-input" accept="image/png" />
                        <div class="concepto-calendario-buttons" style="display: none;">
                            <button id="btnSubirCalendario" class="boton-concepto btn-subir-calendario">Subir</button>
                            <button id="btnCancelarCalendario" class="boton-concepto btn-cancelar-calendario">Cancelar</button>
                        </div>
                        <p id="calendarioFileName" class="concepto-calendario-filename"></p>
                    </div>
                </div>
                <button class="boton-concepto boton-concepto-volver" data-nivel="modulos">Volver</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        setupFormularioCalendario();
    }

    /**
     * Configura los event listeners y comportamiento del formulario de calendario
     * @description
     * Maneja:
     * 1. Selección de archivo y validación
     * 2. Actualización de la interfaz al seleccionar archivo
     * 3. Proceso de subida (actualmente simulado)
     * 4. Cancelación y limpieza del formulario
     */
    function setupFormularioCalendario() {
        const fileInput = document.getElementById('calendarioInput');
        const btnSubir = document.getElementById('btnSubirCalendario');
        const btnCancelar = document.getElementById('btnCancelarCalendario');
        const fileName = document.getElementById('calendarioFileName');
        const buttonsContainer = document.querySelector('.concepto-calendario-buttons');

        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileName.textContent = 'Archivo seleccionado: ' + this.files[0].name;
                buttonsContainer.style.display = 'flex';
            } else {
                limpiarFormularioCalendario();
            }
        });

        btnSubir.addEventListener('click', function() {
            const file = fileInput.files[0];
            if (file) {
                alert('Calendario seleccionado: ' + file.name);
                // TODO: Implementar integración con el backend
            }
            limpiarFormularioCalendario();
        });

        btnCancelar.addEventListener('click', limpiarFormularioCalendario);
    }

    /**
     * Limpia el formulario de calendario y restablece su estado inicial
     * @description
     * Restablece:
     * 1. El input de archivo
     * 2. El texto de archivo seleccionado
     * 3. La visibilidad de los botones
     */
    function limpiarFormularioCalendario() {
        const fileInput = document.getElementById('calendarioInput');
        const fileName = document.getElementById('calendarioFileName');
        const buttonsContainer = document.querySelector('.concepto-calendario-buttons');
        
        if (fileInput) fileInput.value = '';
        if (fileName) fileName.textContent = '';
        if (buttonsContainer) buttonsContainer.style.display = 'none';
    }

    /**
     * Muestra la sección de Personal y Liderazgo (exclusiva de Gerenciales)
     * @description
     * Genera la interfaz para la sección de Pers y Lid que incluye:
     * 1. Título y indicador de sección
     * 2. Opciones específicas de la sección
     * 3. Botón para volver al menú de módulos
     */
    function mostrarSeccionPersyLid() {
        const html = `
            <div class="concepto-persylid-container">
                <div class="concepto-titulo">
                    <h2>Personal y Liderazgo</h2>
                    <span class="tipo-indicador">Vista de Gerenciales</span>
                </div>
                <div class="concepto-persylid-content">
                    <div class="concepto-persylid-opciones">
                        <button class="boton-concepto boton-persylid-opcion">Evaluaciones</button>
                        <button class="boton-concepto boton-persylid-opcion">Informes</button>
                        <button class="boton-concepto boton-persylid-opcion">Estadísticas</button>
                    </div>
                </div>
                <button class="boton-concepto boton-concepto-volver" data-nivel="modulos">Volver</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
    }

    // Función para manejar la subida del calendario    // Función para mostrar el formulario de calendario
    function mostrarFormularioCalendario() {
        const html = `
            <div class="concepto-calendario-container">
                <div class="concepto-titulo">
                    <h2>Subir Calendario</h2>
                </div>
                <div class="concepto-calendario-form">
                    <div class="concepto-calendario-upload">
                        <label class="concepto-calendario-label">Seleccionar archivo PNG:</label>
                        <input type="file" id="calendarioInput" class="concepto-calendario-input" accept="image/png" />
                        <div class="concepto-calendario-buttons" style="display: none;">
                            <button id="btnSubirCalendario" class="boton-concepto btn-subir-calendario">Subir</button>
                            <button id="btnCancelarCalendario" class="boton-concepto btn-cancelar-calendario">Cancelar</button>
                        </div>
                        <p id="calendarioFileName" class="concepto-calendario-filename"></p>
                    </div>
                </div>
                <button class="boton-concepto boton-concepto-volver" data-nivel="modulos">Volver</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        setupFormularioCalendario();
    }

    // Función para configurar el comportamiento del formulario de calendario
    function setupFormularioCalendario() {
        const fileInput = document.getElementById('calendarioInput');
        const btnSubir = document.getElementById('btnSubirCalendario');
        const btnCancelar = document.getElementById('btnCancelarCalendario');
        const fileName = document.getElementById('calendarioFileName');
        const buttonsContainer = document.querySelector('.concepto-calendario-buttons');

        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileName.textContent = 'Archivo seleccionado: ' + this.files[0].name;
                buttonsContainer.style.display = 'flex';
            } else {
                limpiarFormularioCalendario();
            }
        });

        btnSubir.addEventListener('click', function() {
            const file = fileInput.files[0];
            if (file) {
                // Por ahora solo mostrar alerta
                alert('Calendario seleccionado: ' + file.name);
                // TODO: Implementar subida al backend
                // const formData = new FormData();
                // formData.append('file', file);
                // formData.append('type', 'calendario');
                // fetch('/api/upload-calendario', {
                //     method: 'POST',
                //     body: formData,
                //     headers: {
                //         'Authorization': `Bearer ${token}`
                //     }
                // });
            }
            limpiarFormularioCalendario();
        });

        btnCancelar.addEventListener('click', limpiarFormularioCalendario);
    }

    // Función para limpiar el formulario de calendario
    function limpiarFormularioCalendario() {
        const fileInput = document.getElementById('calendarioInput');
        const fileName = document.getElementById('calendarioFileName');
        const buttonsContainer = document.querySelector('.concepto-calendario-buttons');
        
        if (fileInput) fileInput.value = '';
        if (fileName) fileName.textContent = '';
        if (buttonsContainer) buttonsContainer.style.display = 'none';
    }

    /**
     * Función para volver al nivel anterior en la navegación
     * @param {string} nivel - Nivel al que se desea volver ('modulos', 'opciones' o null)
     * @description
     * Maneja la navegación hacia atrás:
     * - A módulos: Muestra la lista de módulos
     * - A opciones: Muestra las opciones del módulo actual
     * - Al inicio: Muestra el menú principal
     */
    function volver(nivel) {
        if (nivel === 'modulos') {
            mostrarModulos(tipoActual);
        } else if (nivel === 'opciones') {
            mostrarOpcionesModulo(moduloActual);
        } else {
            contenidoDinamico.style.display = 'none';
            botonesContainer.style.display = 'grid';
            contenidoDinamico.innerHTML = '<p>Selecciona una opción del menú superior</p>';
        }
    }

    /**
     * Event Listeners Principales
     * @description
     * Sistema de delegación de eventos que maneja:
     * 1. Navegación entre módulos y secciones
     * 2. Interacción con botones especiales
     * 3. Subida y gestión de archivos
     * 4. Navegación hacia atrás
     */
    
    // Event delegation para el contenido dinámico
    contenidoDinamico.addEventListener('click', function(e) {
        // Manejo de botones de módulo
        if (e.target.classList.contains('boton-concepto-modulo')) {
            const modulo = e.target.dataset.modulo;
            mostrarOpcionesModulo(modulo);
        }
        
        // Manejo de botones de opción
        else if (e.target.classList.contains('boton-concepto-opcion')) {
            const opcion = e.target.dataset.opcion;
            if (opcion === 'tareas') {
                mostrarTablaTareas();
            } else if (opcion === 'examenes') {
                mostrarTablaExamenes();
            }
        }
        
        // Manejo del botón volver
        else if (e.target.classList.contains('boton-concepto-volver')) {
            const nivel = e.target.dataset.nivel;
            volver(nivel);
        }
        
        // Manejo de botones especiales de Gerenciales
        else if (tipoActual === 'Gerenciales') {
            if (e.target.classList.contains('boton-concepto-calendario')) {
                console.log('Mostrando formulario de calendario');
                mostrarFormularioCalendario();
            } else if (e.target.classList.contains('boton-concepto-persylid')) {
                console.log('Mostrando sección de Pers y Lid');
                mostrarSeccionPersyLid();
            }
        }
    });

    // Event listener para el contenedor de botones principal
    botonesContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.boton-concepto');
        if (!target) return;

        if (target.dataset.tipo) {
            const tipo = target.dataset.tipo;
            if (tipo === 'foro') {
                alert('Accediendo al foro...');
            } else {
                mostrarModulos(tipo);
            }
        }
    });

    // Inicialización de la interfaz
    botonesContainer.style.display = 'block';
    contenidoDinamico.style.display = 'none';
});
