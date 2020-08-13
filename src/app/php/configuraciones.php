<?php 
    // debug
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    // zona horaria
    ini_set ('date.timezone','America/Mexico_City');

    //Carga las clases de forma automatica 
    spl_autoload_register('autoload');
    // inicio de sesión
    session_start();
?>
