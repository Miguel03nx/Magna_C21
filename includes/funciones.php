<?php

require 'app.php';

function incluirTemplate( string $nombre ) {

    // echo TEMPLATE_URL . "/${nombre}.php";
    //  include "includes/templates/${nombre}.php";
     include  TEMPLATES_URL . "/{$nombre}.php";
    // include "includes/templates/{$nombre}.php";
}