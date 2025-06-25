<?php 
require 'includes/funciones.php';

incluirTemplate('header'); 

?>



<body class="bodylogin">

    <!-- seccion de los logos  -->
    <section class="logo">
        <div class="logos">
            <div class="logo1">
                <picture>
                    <img loading="lazy" class="logoconcepto" src="src/imglogin/MagnaC21-22.svg" alt="logoconcepto21login">
                    <source loading="lazy" srcset="src/imglogin/MagnaC21-22.webp" type="image/webp">
                </picture>
                <!-- <img class="logoconcepto" src="src/imglogin/MagnaC21-22.webp" alt="logoconcepto21login"> -->
            </div>
    
            <div class="logo2">
                <img loading="lazy" class="logomagna " src="src/imglogin/MagnaC21-24.svg" alt="logoconceptomagnalogin">
            </div>
        </div>

    </section> <!-- aqui termina la seccion de los logos -->

    <main class="logincentrado">
        <div class="contenidoform">
            <form action="" class="formulariologin" id="formulariol">
                <fieldset class="loginfield">
                    <!-- <label for="email">Nombre de usuario</label> -->
                     <div class="inputlogin">
                        <div class="saludoaux"> <!-- mensaje de bienvenida -->

                            <h1 class="saludologin" id="hola"> ¡Hola! </h1>

                            <p class="subsaludologin">¿Estas listo para seguir construyendo tu mejor version?</p>

                            <p class="subsaludologin2">¡Hoy es el dia!</p>

                        </div>  <!-- fin del mensaje de bienvenida del login -->
                        
                        <!-- inputs del login-->
                        <div class="inputlogin">
                        <label for="email">Lider ID</label>
                         <input type="usuario" placeholder="" id="usuario" class="usuario" name="usuario">
         
                         <label for="contraseña">Contraseña</label>
                         <input type="password" placeholder="" id="password" class="password" name="password">
                         <!-- <a href="inicio.php">inicio</a> -->
                         </div>
                     </div>
                </fieldset>

    
                <div class="btnslogin">
                    <!-- <a href="inicio.php" class="botonsesion" style="text-align: ;">Iniciar sesion</a> -->
                     <input type="submit" id="botonis" value="Iniciar sesion" class="botonsesion">
                    <!-- <input type="submit" value="Iniciar sesion con una cuenta de terceros" class="botonsesion-terceros"> -->
                </div>
            </form>
        </div>
            
    </main>
    
    <?php

    

    // include 'includes/templates/footer.php'
    incluirTemplate('footer')
    ?>