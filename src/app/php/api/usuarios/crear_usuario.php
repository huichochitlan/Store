<?php 
// phpinfo();
  require '../../funciones.php';  
  require '../../headers.php';
  $datos = json_decode(file_get_contents('php://input'));  
  
  $usuarios = new usuario;
  $usuarios->id_rol = $datos->id_rol;
  $usuarios->id_tipo_registro = 1;
  $usuarios->estado =1;
  $usuarios->email = $datos->email;
  $usuarios->contrasena = $datos->contrasena;
  $usuarios->nombre = $datos->nombre;
  $usuarios->apellidos = $datos->apellidos;
  

  // $datos = fn() => $json = file_get_contents('php://input');
  
  

  // // var_dump($params);
  // class Result {}

  // $response = new Result();
  // $response->resultado = 'OK';
  // $response->mensaje = 'datos grabados';
  // $response->datos = $usuarios;

  // // header('Content-Type: application/json');
  // echo json_encode($response);  
?>
