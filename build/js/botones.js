document.addEventListener('DOMContentLoaded', () => { // este DOM hace que el codigo JS se ejecute hasta que la pagina este totalmente cargada

    // estos const son los que seleccionan los id de los elementos html como lo son los btns
    const botonesPrincipalesContainer = document.querySelector('.botonesG'); // Referencia al contenedor de botones principales
    const botonesPrincipales = document.querySelectorAll('.botonesG .boton1');  // NodeList de los botones principales individuales, esto devuelve todos los elementos con la clase boton1  el nodelist ayuda a iterar con un foreach mas adelante en el codigo 

    const contenidoDinamico = document.querySelector('.contenido-dinamico'); // Contenedor donde se inyectará el HTML dinámico Selecciona el <div> donde se va a inyectar todo el contenido que cambie dinámicamente. Es el "escenario" donde se mostrarán los módulos, calendarios, reportes, etc.



    // NUEVA VARIABLE PARA GESTIONAR EL ESTADO DE NAVEGACIÓN
    let estadoNavegacionActual = {
        nivel: 0, // 0 = Menú Principal, 1 = Contenido de Nivel 1, 2 = Contenido de Nivel 2
        /*0: Significa que está viendo los botones del menú principal.
        1: Significa que está viendo el contenido de la primera capa (ej. Calendario, Reporte, o la lista de Módulos del Programa de Liderazgo).
        2: Significa que está viendo el contenido de la segunda capa (ej. el contenido de un Módulo individual como "Módulo 1"). */
        idPrevio: null // Almacena el ID del contenido que nos llevó al nivel actual
        /* idPrevio: Almacena la clave del contenido desde el cual se navegó al nivel actual. Esto es fundamental para el botón "Volver", ya que le permite saber a qué vista anterior debe regresar. Por ejemplo, si estás en modulo1, su idPrevio será programa-liderazgo. Si estás en programa-liderazgo, su idPrevio será principal (que significa el menú inicial).        */
    };    // Función para manejar la descarga del calendario
    function descargarCalendario() {
        alert('Descargando png');
        // Aquí irá la lógica de descarga cuando se integre con el backend
        return false;
    }

    // Función para manejar la descarga del reporte
    function descargarReporte() {
        alert('Descargando pdf');
        // Aquí irá la lógica de descarga cuando se integre con el backend
        return false;
    }

    // Función para abrir la ventana de coaching
    function abrirCoaching() {
        window.open('https://concepto21.com/coaching', '_blank');
        return false;
    }

    // Objeto 'contenidos': Aquí definimos todo el HTML que se mostrará
    const contenidos = {
        // Los botones de calendario, coaching y reporte ya no tienen contenido
        // porque serán manejados directamente por sus funciones específicas
        'calendario': false, // Indica que no debe mostrar contenido
        'reporte-planeacion': false, // Indica que no debe mostrar contenido
        'coaching': false, // Indica que no debe mostrar contenido
        

        'personalidad-liderazgo': `
            <div class="titulosprogramaL personalidad">
                <h2></h2>
                <p><p>
            </div>
            <div class="programaliderazgo ">
                <button class="sub-boton">Reporte Insights Discovery</button>
                <button class="sub-boton">Evaluacion test de Moss </button>
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
        // CADA UNO CONTIENE BOTONES DE ACCIÓN FINAL Y UN BOTÓN VOLVER ESPECÍFICO
        'modulo1': `
            <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 1</h3>
            </div>

            <div class="contenidoModulo">
            <button class="sub-boton accion-final-boton">Examen</button>
            <button class="sub-boton accion-final-boton">Material</button>
            <button class="sub-boton accion-final-boton">FORO</button>
            <button class="sub-boton accion-final-boton">EVIDENCIA</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
            </div>

        `,
        'modulo2': `
             <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 2</h3>
            </div>
            
            <div class="contenidoModulo">
            <button class="sub-boton accion-final-boton">Examen</button>
            <button class="sub-boton accion-final-boton">Material</button>
            <button class="sub-boton accion-final-boton">Foro</button>
            <button class="sub-boton accion-final-boton">EVIDENCIA</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
            </div>
        `,
        'modulo3': `
            <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 3</h3>
            </div>

            <div class="contenidoModulo">
            <button class="sub-boton accion-final-boton">Guía de Estudio</button>
            <button class="sub-boton accion-final-boton">Examen</button>
            <button class="sub-boton accion-final-boton">Foro</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
            </div>
        `,
        'modulo4': `

             <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 4</h3>
            </div>


            <button class="sub-boton accion-final-boton">Recursos Adicionales</button>
            <button class="sub-boton accion-final-boton">Examen</button>
            <button class="sub-boton accion-final-boton">Foro</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
        `,

        'modulo5': `

             <div class="titulosprogramaL modulog">
            <h3>Contenido del Módulo 5</h3>
            </div>


            <button class="sub-boton accion-final-boton">Recursos Adicionales</button>
            <button class="sub-boton accion-final-boton">Examen</button>
            <button class="sub-boton accion-final-boton">Foro</button>
            <button class="boton-volver" data-destino="programa-liderazgo">Volver a Módulos</button>
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
            // ESTO HACE QUE LOS BOTONES DE LOS SIGUIENTES SUBMENU SE CAMBIEN A grid
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
            });

            // NUEVO: MANEJO DE BOTONES DE ACCIÓN FINAL (ej. Examen, Foro, Video, etc.)
            const accionFinalBotones = contenidoDinamico.querySelectorAll('.accion-final-boton');
            accionFinalBotones.forEach(boton => {
                boton.addEventListener('click', (event) => {
                    alert(`Has hecho clic en una acción final: ${event.target.textContent}`);
                    // AQUÍ IRÍA LA LÓGICA ESPECÍFICA PARA CADA ACCIÓN FINAL
                    // COMO DESCARGAR, ABRIR UN MODAL, NAVEGAR A OTRA PÁGINA, ETC.
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
    // }
});