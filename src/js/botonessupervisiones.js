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
    
    const opciones = ["Examen", "Material", "volver"];
    
    opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.classList.add("boton1");
        nuevoBoton.textContent = opcion;
        
        if (opcion === "volver") {
            nuevoBoton.addEventListener("click", mostrarMenuProgramaLiderazgo);
        } else {
            nuevoBoton.addEventListener("click", () => {
                console.log(`${modulo} - ${opcion}`);
                // Aquí puedes agregar la lógica específica para cada opción
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
