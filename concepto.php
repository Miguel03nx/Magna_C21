<?php 
require 'includes/funciones.php';
incluirTemplate('header'); 
?>

<body>
    <section class="saludo-inicio">
        <div class="nav">
            <section class="logoMLider">
                <img class="logoMagnaLider" src="src/imglogin/MagnaC21-30.svg" alt="logoconcepto21login">
            </section>
            
            <div class="navegadores">
                <nav class="nav-inicio">
                     <a href="gerenciales.php">Gerencias</a>
                    <a href="supervisiones.php">Supervisiones</a>
                    <a href="rrhh.php">Recursos Humanos</a>
                    <a href="concepto.php">Concepto 21</a>
                    <a href="#">Salir</a>
                </nav>
            </div>
        </div>

        <section class="contenedor">
            <section class="logoconceptoblack">
                <img class="LCblack" src="src/imglogin/MagnaC21-29.svg" alt="logoconcepto21login">
            </section>
            
            <div class="titulo1">
                <h1 class="titulo1H">¡Haz que hoy valga la pena!</h1>
            </div>

            <section class="auxcontenido">
                <section class="contenido">
                    <h1 class="conceptotitulo">Concepto 21</h1>

                    <!-- Botones principales -->
                    <div class="botonesG" id="botonesConcepto">
                        <button type="submit" class="boton1" data-tipo="gerenciales">
                            <p>Gerenciales</p>
                        </button>

                        <button type="submit" class="boton1" data-tipo="supervisores">
                            <p>Supervisores</p>
                        </button>
                    </div>

                    <!-- Contenido dinámico -->
                    <div class="contenido-dinamico" id="contenidoDinamico">
                        <p>Selecciona una opción del menú superior</p>
                    </div>

                    <!-- Template para la tabla de tareas (inicialmente oculto) -->
                    <template id="tabla-tareas-template" class="template-tareas">
                        <div class="tabla-container">
                            <div class="tabla-header">
                                <h2 class="tabla-titulo">Lista de Tareas</h2>
                            </div>
                            <div class="tabla-scroll-container">
                                <table class="tabla-tareas">
                                    <thead>
                                        <tr>
                                            <th>Nombre de usuario</th>
                                            <th>Tarea</th>
                                            <th>Archivo</th>
                                            <th>Descargar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Gerencial 1</td>
                                            <td>Tarea 1</td>
                                            <td>tarea1.pdf</td>
                                            <td>
                                                <button class="btn-descargar" title="Descargar tarea">
                                                    <i class="fas fa-download"></i> Descargar
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 2</td>
                                            <td>Tarea 1</td>
                                            <td>evidencia_modulo1.pdf</td>
                                            <td>
                                                <button class="btn-descargar" title="Descargar tarea">
                                                    <i class="fas fa-download"></i> Descargar
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 3</td>
                                            <td>Tarea 2</td>
                                            <td>reporte_final.pdf</td>
                                            <td>
                                                <button class="btn-descargar" title="Descargar tarea">
                                                    <i class="fas fa-download"></i> Descargar
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 4</td>
                                            <td>Tarea 1</td>
                                            <td>presentacion.pdf</td>
                                            <td>
                                                <button class="btn-descargar" title="Descargar tarea">
                                                    <i class="fas fa-download"></i> Descargar
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 5</td>
                                            <td>Tarea 3</td>
                                            <td>analisis.pdf</td>
                                            <td>
                                                <button class="btn-descargar" title="Descargar tarea">
                                                    <i class="fas fa-download"></i> Descargar
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 6</td>
                                            <td>Tarea 2</td>
                                            <td>resumen_ejecutivo.pdf</td>
                                            <td>
                                                <button class="btn-descargar" title="Descargar tarea">
                                                    <i class="fas fa-download"></i> Descargar
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </template>

                    <style>
                        
                    </style>
                </section>
            </section>
        </section>
    </section>

    <!-- Font Awesome para los iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="src/js/botonesconcepto.js"></script>
</body>
</html>