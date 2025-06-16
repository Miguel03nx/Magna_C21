<?php 

require '../../includes/config/database.php';

$db = conectarDB();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
       echo "<pre>";
       var_dump($_POST);
       echo "</pre>";

       $nombre = $_POST['nombre'];
       $modulo_id = $_POST['modulo_id'];

       // insertar en la base de datos 
       $query = "INSERT INTO modulos (nombre, modulo_id) VALUES ( '$nombre', '$modulo_id')";

       echo $query;

    }

require '../../includes/funciones.php';

incluirTemplate('header'); 

?>

<body>
    <section class="saludo-inicio">
        <div class="nav">
            <!-- <h1>aqui el nav</h1> -->            <section class="logoMLider">
                <img class="logoMagnaLider" src="/../../src/imglogin/MagnaC21-30.svg" alt="logoconcepto21login">
            </section>
              <div class="navegadores">
                <nav class="nav-inicio">
                     <a href="/gerenciales.php">Gerencias</a>
                    <a href="/supervisiones.php">Supervisiones</a>
                    <a href="/rrhh.php">Recursos Humanos</a>
                    <a href="/concepto.php">Concepto 21</a>
                    <a href="#">Salir</a>
                </nav>
            </div>
        </div>

        <!-- TO DO ICONO HAMBURGUESA -->

        <section class="contenedor">
            <section class="logoconceptoblack ">
                    <img class="LCblack" src="/src/imglogin/MagnaC21-29.svg" alt="logoconcepto21login">
            </section> <!-- aqui termina el section del segundo logo --> 
            
            <div class="titulo1">
                <h1 class="titulo1H">¡Haz que hoy valga la pena! (crear) </h1>
            </div> <!-- aqui termina el div del primer titulo HAZ QUE VALGA LA PENA-->

            <section class="auxcontenido">
                
                <section class="contenido">


                <form class="formularioarchivos" method="POST" action="/admin/documentos/crear.php">
                <fieldset class="fieldcrear">
                    <legend>Informacion archivo</legend>

                    <label for="nombre">Nombre</label>
                    <input class="inputcrear" type="text" name="nombre" id="mombre" placeholder="Nombre del Archivo">

                    <label for="modulo_id">Modulo</label>
                    <input class="inputcrear" type="text" id="modulo_id" name="modulo_id" placeholder="Nombre modulo">

                    <!-- <label for="fecha">descripcion</label>
                    <input class="inputcrear" type="text" id="fecha" placeholder="Titulo Archivo"> -->

                    <!-- accept=".pdf" -->
                     <label for="archivo">Archivo</label>
                     <input type="file" id="archivo" accept=".pdf">

                </fieldset>
                
                <input type="submit" value="Subir" class="btn-modulo">
                </form>

                <a href="/admin" class="btn-modulo">Volver</a>

                </section> <!-- AQUI TERMINA EL SECTION "contenido"
            </section>
            

        </section>
    </section>
</body>
</html>