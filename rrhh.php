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
                <h1 class="titulo1H">¡Haz que valga la pena!</h1>
            </div> <!-- aqui termina el div del primer titulo HAZ QUE VALGA LA PENA-->

            <section class="auxcontenido">
                
                <section class="contenido">

                    <h1>Recursos Humanos</h1>

<!-- seccion de botones para gerencialesa -->
                    <div class="botonesG" id="botonesRH"> <!-- div que contiene los botones -->

                        <button type="submit" class="boton1" id="boton-gerencial">
                            <p>Gerenciales</p>
                        </button>


                        <button type="submit" class="boton1" id="boton-supervisor">
                            <p>Supervisores</p>
                        </button>

                    </div>



                </section> <!-- AQUI TERMINA EL SECTION DONDE CONTIENE LOS PARRAFOS Y MAS -->

            </section>
            

        </section>
    </section>

    <script src="build/js/botonesrh.js"></script>

</body>
</html>