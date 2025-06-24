<?php 
require 'includes/funciones.php';
incluirTemplate('header'); 
?>

<body>
    <!-- Sección temporalmente deshabilitada -->
    <div class="contenedor">
        <div class="mensaje-construccion">
            <h2>Sección en Construcción</h2>
            <p>Esta sección está temporalmente deshabilitada.</p>
            <a href="index.php" class="boton-volver">Volver al Inicio</a>
        </div>
    </div>

    <style>
        .contenedor {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f5f5f5;
        }
        .mensaje-construccion {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .mensaje-construccion h2 {
            color: #333;
            margin-bottom: 1rem;
        }
        .mensaje-construccion p {
            color: #666;
            margin-bottom: 2rem;
        }
        .boton-volver {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .boton-volver:hover {
            background-color: #0056b3;
        }
    </style>

<?php 
incluirTemplate('footer');
?>
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