document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const botonesContainer = document.querySelector('#botonesConcepto');
    const contenidoDinamico = document.querySelector('#contenidoDinamico');
    const tablaTemplate = document.querySelector('#tabla-tareas-template');
    const tablaExamenesGerencialesTemplate = document.querySelector('#tabla-examenes-gerenciales-template');
    const tablaExamenesSupervisoresTemplate = document.querySelector('#tabla-examenes-supervisores-template');
    let tipoActual = '';
    let moduloActual = '';

    // Función para mostrar módulos
    function mostrarModulos(tipo) {
        tipoActual = tipo;
        const html = `
            <div class="modulos-container">
                <h2>Módulos de ${tipo}</h2>
                <div class="modulos-grid">
                    <button class="boton1" data-modulo="1">Módulo 1</button>
                    <button class="boton1" data-modulo="2">Módulo 2</button>
                    <button class="boton1" data-modulo="3">Módulo 3</button>
                    <button class="boton1" data-modulo="4">Módulo 4</button>
                    <button class="boton1" data-modulo="5">Módulo 5</button>
                    <button class="boton1" data-modulo="6">Módulo 6</button>
                </div>
                <button class="boton-volver">Volver</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
        contenidoDinamico.style.display = 'block';
        botonesContainer.style.display = 'none';
    }

    // Función para mostrar opciones del módulo
    function mostrarOpcionesModulo(numeroModulo) {
        moduloActual = numeroModulo;
        const html = `
            <div class="opciones-modulo">
                <h2>Módulo ${numeroModulo}</h2>
                <div class="opciones-grid">
                    <button class="boton1" data-opcion="tareas">Tareas</button>
                    <button class="boton1" data-opcion="examenes">Exámenes</button>
                </div>
                <button class="boton-volver" data-nivel="modulos">Volver</button>
            </div>
        `;
        contenidoDinamico.innerHTML = html;
    }

    // Función para mostrar la tabla de tareas
    function mostrarTablaTareas() {
        const tablaClone = tablaTemplate.content.cloneNode(true);
        const container = document.createElement('div');
        container.className = 'vista-tareas';
        container.innerHTML = `
            <h2>${tipoActual} - Módulo ${moduloActual}</h2>
        `;
        container.appendChild(tablaClone);
        container.innerHTML += `
            <button class="boton-volver" data-nivel="opciones">Volver</button>
        `;
        contenidoDinamico.innerHTML = '';
        contenidoDinamico.appendChild(container);
    }

    // Función para mostrar la tabla de exámenes
    function mostrarTablaExamenes() {
        const template = tipoActual.toLowerCase() === 'gerenciales' ? 
            tablaExamenesGerencialesTemplate : 
            tablaExamenesSupervisoresTemplate;
        
        const tablaClone = template.content.cloneNode(true);
        const container = document.createElement('div');
        container.className = 'vista-examenes';
        container.innerHTML = `
            <h2>${tipoActual} - Módulo ${moduloActual}</h2>
        `;
        container.appendChild(tablaClone);
        container.innerHTML += `
            <button class="boton-volver" data-nivel="opciones">Volver</button>
        `;
        contenidoDinamico.innerHTML = '';
        contenidoDinamico.appendChild(container);

        // Configurar los controles de archivo
        configurarControlesArchivo();
    }

    // Función para configurar los controles de archivo
    function configurarControlesArchivo() {
        const prefix = tipoActual.toLowerCase() === 'gerenciales' ? 'gerencial' : 'supervisor';
        
        document.querySelectorAll(`.${prefix}-file`).forEach((input, index) => {
            const uploadButtons = input.nextElementSibling;
            const btnSubir = uploadButtons.querySelector('.btn-subir');
            const btnCancelar = uploadButtons.querySelector('.btn-cancelar');

            input.addEventListener('change', function() {
                if (this.files.length > 0) {
                    uploadButtons.style.display = 'flex';
                }
            });

            btnSubir.addEventListener('click', function() {
                alert('Archivo subido exitosamente');
                input.value = '';
                uploadButtons.style.display = 'none';
            });

            btnCancelar.addEventListener('click', function() {
                input.value = '';
                uploadButtons.style.display = 'none';
            });
        });
    }

    // Función para volver al nivel anterior
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

    // Event listeners
    document.addEventListener('click', function(e) {
        // Botones principales
        if (e.target.closest('[data-tipo]')) {
            const tipo = e.target.closest('[data-tipo]').dataset.tipo;
            if (tipo === 'foro') {
                alert('FORO en desarrollo');
                return;
            }
            mostrarModulos(tipo);
        }

        // Botones de módulos
        if (e.target.matches('[data-modulo]')) {
            const modulo = e.target.dataset.modulo;
            mostrarOpcionesModulo(modulo);
        }

        // Botones de opciones
        if (e.target.matches('[data-opcion]')) {
            const opcion = e.target.dataset.opcion;
            if (opcion === 'tareas') {
                mostrarTablaTareas();
            } else if (opcion === 'examenes') {
                mostrarTablaExamenes();
            }
        }

        // Botones de volver
        if (e.target.matches('.boton-volver')) {
            const nivel = e.target.dataset.nivel;
            volver(nivel);
        }

        // Botones de descarga
        if (e.target.matches('.btn-descargar') || e.target.closest('.btn-descargar')) {
            alert('Descargando archivo...');
        }
    });
});
