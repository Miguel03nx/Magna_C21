<?php

function conectarDB() : mysqli {
    $db = mysqli_connect('localhost', 'root', '', 'magna_crud');

    if(!$db){
        echo "Error no se pudo conectar";
        exit;
    }

    return $db;
}