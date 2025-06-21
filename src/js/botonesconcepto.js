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
            <div class="concepto-modulos-container">
                <div class="concepto-titulo">
                  <h2 class="titulomodulos" >Módulos de ${tipo}</h2>
                </div>
                <div class="concepto-modulos-grid">
                    <div class="concepto-modulos-botones">
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="1">Módulo 1</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="2">Módulo 2</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="3">Módulo 3</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="4">Módulo 4</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="5">Módulo 5</button>
                        <button class="boton-concepto boton-concepto-modulo" data-modulo="6">Módulo 6</button>
                    </div>
                </div>
                <button class="boton-concepto boton-concepto-volver">Volver</button>
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
    }    // Función para mostrar la tabla de tareas
    function mostrarTablaTareas() {
        const tablaClone = tablaTemplate.content.cloneNode(true);
        const container = document.createElement('div');
        container.className = 'concepto-vista-tareas';
        container.innerHTML = `
            <div class="concepto-titulo">
                <h2>${tipoActual} - Módulo ${moduloActual}</h2>
            </div>
        `;
        container.appendChild(tablaClone);
        container.innerHTML += `
            <button class="boton-concepto boton-concepto-volver" data-nivel="opciones">Volver</button>
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
        container.className = 'concepto-vista-examenes';
        container.innerHTML = `
            <div class="concepto-titulo">
                <h2>${tipoActual} - Módulo ${moduloActual}</h2>
            </div>
        `;
        container.appendChild(tablaClone);
        container.innerHTML += `
            <button class="boton-concepto boton-concepto-volver" data-nivel="opciones">Volver</button>
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

    // Event listeners principales
    botonesContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.boton-concepto');
        if (!target) return;

        if (target.dataset.tipo) {
            // Botones principales
            const tipo = target.dataset.tipo;
            if (tipo === 'foro') {
                alert('Accediendo al foro...');
            } else {
                mostrarModulos(tipo);
            }
        }
    });

    // Event listeners para el contenido dinámico
    contenidoDinamico.addEventListener('click', function(e) {
        const target = e.target;

        // Botones de módulos
        if (target.matches('.boton-concepto-modulo')) {
            const modulo = target.dataset.modulo;
            mostrarOpcionesModulo(modulo);
        }

        // Botones de opciones
        if (target.matches('.boton-concepto-opcion')) {
            const opcion = target.dataset.opcion;
            if (opcion === 'tareas') {
                mostrarTablaTareas();
            } else if (opcion === 'examenes') {
                mostrarTablaExamenes();
            }
        }

        // Botones volver
        if (target.matches('.boton-concepto-volver')) {
            const nivel = target.dataset.nivel;
            if (nivel === 'modulos') {
                mostrarModulos(tipoActual);
            } else if (nivel === 'opciones') {
                mostrarOpcionesModulo(moduloActual);
            } else {
                botonesContainer.style.display = 'block';
                contenidoDinamico.innerHTML = '<p>Selecciona una opción del menú superior</p>';
                contenidoDinamico.style.display = 'none';
            }
        }
    });

    // Inicialización
    botonesContainer.style.display = 'block';
    contenidoDinamico.style.display = 'none';
});
