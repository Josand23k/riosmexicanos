<?php
//Configuración necesaria para acceder a la base de datos (db)
function conn(){
    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "mensaje_rm";

     
    // Generando la conecxión  con el servidor
    $conectar = mysqli_connect($hostname, $usuariodb, $passworddb, $dbname);
    return $conectar;
}

?>