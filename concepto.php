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
                    <h1 style="margin-bottom: 2rem;">Concepto 21</h1>                    <!-- Botones principales de Concepto -->
                    <div class="botones-concepto-container" id="botonesConcepto">
                        <div class="botones-concepto-principales">
                            <button type="submit" class="boton-concepto boton-concepto-principal" data-tipo="gerenciales">
                                <p>Gerenciales</p>
                            </button>

                            <button type="submit" class="boton-concepto boton-concepto-principal" data-tipo="supervisores">
                                <p>Supervisores</p>
                            </button>

                            <button type="submit" class="boton-concepto boton-concepto-principal" data-tipo="foro">
                                <p>FORO</p>
                            </button>
                        </div>
                    </div>

                    <!-- Contenido dinámico -->
                    <div class="contenido-dinamico" id="contenidoDinamico">
                        <p>Selecciona una opción del menú superior</p>
                    </div>

                    <!-- Template para la tabla de tareas -->
                    <template id="tabla-tareas-template">
                        <div class="tabla-container">
                            <div class="tabla-header">
                                <h2 class="tabla-titulo">Lista de Tareas</h2>
                            </div>
                            <div class="tabla-scroll-container">
                                <table class="tabla-tareas">
                                    <thead>
                                        <tr>
                                            <th class="th-nombre">Nombre de usuario</th>
                                            <th>Tarea</th>
                                            <th>Archivo</th>
                                            <th>Descargar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Juan Carlos Rodríguez González</td>
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

                    <!-- Template para la tabla de exámenes gerenciales -->
                    <template id="tabla-examenes-gerenciales-template">
                        <div class="tabla-container">
                            <div class="tabla-header">
                                <h2 class="tabla-titulo">Gestión de material - Gerenciales</h2>
                            </div>
                            <div class="tabla-scroll-container">
                                <table class="tabla-examenes">
                                    <thead>
                                        <tr>
                                            <th class="th-nombre">Nombre</th>
                                            <th>Módulo</th>
                                            <th>Archivos a subir</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>María Fernanda López Gutiérrez</td>
                                            <td>Módulo 1</td>
                                            <td class="celda-upload">
                                                <div class="upload-container gerencial-upload">
                                                    <input type="file" class="file-input gerencial-file" id="gerencial-file1">
                                                    <div class="upload-buttons gerencial-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 2</td>
                                            <td>Módulo 2</td>
                                            <td class="celda-upload">
                                                <div class="upload-container gerencial-upload">
                                                    <input type="file" class="file-input gerencial-file" id="gerencial-file2">
                                                    <div class="upload-buttons gerencial-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 3</td>
                                            <td>Módulo 1</td>
                                            <td class="celda-upload">
                                                <div class="upload-container gerencial-upload">
                                                    <input type="file" class="file-input gerencial-file" id="gerencial-file3">
                                                    <div class="upload-buttons gerencial-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 4</td>
                                            <td>Módulo 3</td>
                                            <td class="celda-upload">
                                                <div class="upload-container gerencial-upload">
                                                    <input type="file" class="file-input gerencial-file" id="gerencial-file4">
                                                    <div class="upload-buttons gerencial-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 5</td>
                                            <td>Módulo 2</td>
                                            <td class="celda-upload">
                                                <div class="upload-container gerencial-upload">
                                                    <input type="file" class="file-input gerencial-file" id="gerencial-file5">
                                                    <div class="upload-buttons gerencial-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gerencial 6</td>
                                            <td>Módulo 3</td>
                                            <td class="celda-upload">
                                                <div class="upload-container gerencial-upload">
                                                    <input type="file" class="file-input gerencial-file" id="gerencial-file6">
                                                    <div class="upload-buttons gerencial-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </template>

                    <!-- Template para la tabla de exámenes supervisores -->
                    <template id="tabla-examenes-supervisores-template">
                        <div class="tabla-container">
                            <div class="tabla-header">
                                <h2 class="tabla-titulo">Gestión de material - Supervisores</h2>
                            </div>
                            <div class="tabla-scroll-container">
                                <table class="tabla-examenes">
                                    <thead>
                                        <tr>
                                            <th class="th-nombre">Nombre</th>
                                            <th>Módulo</th>
                                            <th>Archivos a subir</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>José Antonio Ramírez Hernández</td>
                                            <td>Módulo 1</td>
                                            <td class="celda-upload">
                                                <div class="upload-container supervisor-upload">
                                                    <input type="file" class="file-input supervisor-file" id="supervisor-file1">
                                                    <div class="upload-buttons supervisor-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Supervisor 2</td>
                                            <td>Módulo 2</td>
                                            <td class="celda-upload">
                                                <div class="upload-container supervisor-upload">
                                                    <input type="file" class="file-input supervisor-file" id="supervisor-file2">
                                                    <div class="upload-buttons supervisor-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Supervisor 3</td>
                                            <td>Módulo 1</td>
                                            <td class="celda-upload">
                                                <div class="upload-container supervisor-upload">
                                                    <input type="file" class="file-input supervisor-file" id="supervisor-file3">
                                                    <div class="upload-buttons supervisor-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Supervisor 4</td>
                                            <td>Módulo 3</td>
                                            <td class="celda-upload">
                                                <div class="upload-container supervisor-upload">
                                                    <input type="file" class="file-input supervisor-file" id="supervisor-file4">
                                                    <div class="upload-buttons supervisor-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Supervisor 5</td>
                                            <td>Módulo 2</td>
                                            <td class="celda-upload">
                                                <div class="upload-container supervisor-upload">
                                                    <input type="file" class="file-input supervisor-file" id="supervisor-file5">
                                                    <div class="upload-buttons supervisor-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Supervisor 6</td>
                                            <td>Módulo 3</td>
                                            <td class="celda-upload">
                                                <div class="upload-container supervisor-upload">
                                                    <input type="file" class="file-input supervisor-file" id="supervisor-file6">
                                                    <div class="upload-buttons supervisor-buttons" style="display: none;">
                                                        <button class="btn-subir btn-compact">Subir</button>
                                                        <button class="btn-cancelar btn-compact">Cancelar</button>
                                                    </div>
                                                </div>
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