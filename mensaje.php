<?php
  include_once('db.php');
    // Recibo de todo los datos del formulario de la página de contacto
    $nombre=$_POST['nombre'];
    $email=$_POST['email'];
    $actividad=$_POST['actividad'];
    $fecha=$_POST['fecha'];
    $cuantos=$_POST['cuantos'];
    $mensaje=$_POST['mensaje'];

      echo "Los datos son los siguientes; <br>";
      echo "$nombre, $email, $actividad, $fecha, $cuantos y $mensaje";  

      $conectar=conn(); 
      $sql="INSERT INTO info_contactorm (nombre, email, actividad, fecha, cuantos, mensaje) VALUES ('$nombre', '$email', '$actividad', '$fecha', '$cuantos', '$mensaje')";
      $resul = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);
      
      echo "$sql";

      
?>