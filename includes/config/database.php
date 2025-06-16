<?php

function conectarDB(): mysqli {
    // ⚠️ Importante: 'localhost' debe cambiarse a 'db' (nombre del servicio MySQL en docker-compose)
    $db = mysqli_connect('db', 'myapp_user', 'secret123', 'myapp_db');

    if (!$db) {
        echo "❌ Error: No se pudo conectar a la base de datos. " . mysqli_connect_error();
        exit;
    }

    return $db;
}