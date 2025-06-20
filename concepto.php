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
                    <h1>Concepto 21</h1>

                    <!-- Botones principales -->
                    <div class="botonesG" id="botonesConcepto">
                        <button type="submit" class="boton1" data-tipo="gerenciales">
                            <p>Gerenciales</p>
                        </button>

                        <button type="submit" class="boton1" data-tipo="supervisores">
                            <p>Supervisores</p>
                        </button>

                        <button type="submit" class="boton1" data-tipo="foro">
                            <p>FORO</p>
                        </button>
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
                        .tabla-container {
                            width: 100%;
                            max-width: 1200px;
                            margin: 0 auto;
                            background: #fff;
                            border-radius: 8px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }

                        .tabla-header {
                            padding: 1rem;
                            background: rgb(75, 102, 129);
                            border-bottom: 2px solid #dee2e6;
                            border-radius: 8px 8px 0 0;
                        }

                        .tabla-titulo {
                            margin: 0;
                            color: #fff;
                            font-size: 1.25rem;
                        }

                        .tabla-scroll-container {
                            max-height: 400px;
                            overflow-y: auto;
                            border-radius: 0 0 8px 8px;
                        }

                        .tabla-tareas, .tabla-examenes {
                            width: 100%;
                            border-collapse: collapse;
                        }

                        .tabla-tareas thead, .tabla-examenes thead {
                            position: sticky;
                            top: 0;
                            background: rgb(132, 167, 201);
                            z-index: 1;
                        }

                        .tabla-tareas th, .tabla-examenes th,
                        .tabla-tareas td, .tabla-examenes td {
                            padding: 0.75rem;
                            border-bottom: 1px solid #dee2e6;
                        }

                        .th-nombre {
                            min-width: 250px;
                            width: 30%;
                        }

                        .tabla-tareas th, .tabla-examenes th {
                            background: rgb(130, 154, 177);
                            text-align: left;
                            border-bottom: 2px solid #dee2e6;
                            color: #fff;
                        }

                        .tabla-tareas tbody tr:hover, .tabla-examenes tbody tr:hover {
                            background-color: rgb(133, 173, 213);
                        }

                        .celda-upload {
                            min-width: 180px;
                        }

                        .upload-container {
                            display: flex;
                            flex-direction: column;
                            gap: 0.25rem;
                        }

                        .upload-buttons {
                            display: flex;
                            gap: 0.25rem;
                        }

                        .btn-subir, .btn-cancelar {
                            padding: 0.25rem 0.5rem;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 0.85rem;
                            transition: all 0.2s ease;
                        }

                        .btn-compact {
                            padding: 0.2rem 0.4rem;
                            font-size: 0.8rem;
                        }

                        .btn-subir:hover, .btn-cancelar:hover {
                            opacity: 0.9;
                        }

                        /* Estilos específicos para gerenciales */
                        .gerencial-upload .btn-subir {
                            background-color: #4a90e2;
                            color: white;
                        }

                        .gerencial-upload .btn-cancelar {
                            background-color: #e74c3c;
                            color: white;
                        }

                        /* Estilos específicos para supervisores */
                        .supervisor-upload .btn-subir {
                            background-color: #2ecc71;
                            color: white;
                        }

                        .supervisor-upload .btn-cancelar {
                            background-color: #e67e22;
                            color: white;
                        }

                        .tabla-scroll-container::-webkit-scrollbar {
                            width: 8px;
                        }

                        .tabla-scroll-container::-webkit-scrollbar-track {
                            background: rgb(153, 69, 69);
                            border-radius: 0 0 8px 0;
                        }

                        .tabla-scroll-container::-webkit-scrollbar-thumb {
                            background: #888;
                            border-radius: 4px;
                        }

                        .tabla-scroll-container::-webkit-scrollbar-thumb:hover {
                            background: #555;
                        }
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