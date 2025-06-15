<?php 
require 'includes/funciones.php';

incluirTemplate('header'); 

?>

<body>
    <section class="saludo-inicio">
        <div class="nav">
            <!-- <h1>aqui el nav</h1> -->
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

        <!-- TO DO ICONO HAMBURGUESA -->

        <section class="contenedor">
            <section class="logoconceptoblack ">
                    <img class="LCblack" src="src/imglogin/MagnaC21-29.svg" alt="logoconcepto21login">
            </section> <!-- aqui termina el section del segundo logo --> 
            
            <div class="titulo1">
                <h1 class="titulo1H">¡Haz que hoy valga la pena!</h1>
            </div> <!-- aqui termina el div del primer titulo HAZ QUE VALGA LA PENA-->

            <section class="auxcontenido" >
                
                <section class="contenido">

                    <h1 style="margin-bottom: 1rem; margin-top: 1rem;">Staff Gerencial</h1>

                    <!-- seccion de botones para gerencialesa -->
                    <div class="botonesG" id="botonesG"> <!-- div que contiene los botones -->

                        <button type="submit" class="boton1" data-contenido="calendario">
                            <!-- <img src="src/imgbtns/Botones-08.svg" alt=""> -->
                            <!-- el data contenido es lo que usa Js para poder leer, o modificar el contenido -->
                            <p>Calendario</p>
                        </button>


                        <button type="submit" class="boton1" data-contenido="reporte-planeacion">
                            <p>Reporte planeacion estrategica</p>
                        </button>


                        <button type="submit" class="boton1" data-contenido="coaching">
                            <p>Coaching</p>
                        </button>


                        <button type="submit" class="boton1" data-contenido="personalidad-liderazgo">
                            <p>Personalidad y Liderazgo</p>
                        </button>


                        <button type="submit" class="boton1" data-contenido="programa-liderazgo">
                            <p>Programa Liderazgo</p>
                        </button>

                        <button type="submit" class="boton1" data-contenido="ejemplo">
                            <p>ejemplo 1</p>
                        </button>

                        <!-- <dialog id="myDialog" closedby="any">
                            <h2>Bienvenido</h2>
                            <p>Este es un ejemplo de modal</p>
                            <form method="dialog">
                                <button>cerrar</button>
                            </form>
                        </dialog> -->

                        <!-- <div> para subir imagenes o files
                            <img id="img" style="max-width: 150px">
                            <input type="file" onchange="img.src = window.URL.createObjectURL(this.file[0])">
                        </div> -->

                    </div>

                    <div class="contenido-dinamico">
                        <p>Selecciona una opcion del menu superior</p>
                    </div>

                </section> <!-- AQUI TERMINA EL SECTION DONDE CONTIENE LOS PARRAFOS Y MAS -->
            </section>
            

        </section>
    </section>

     <script src="build/js/botones.js"></script>
</body>
</html>