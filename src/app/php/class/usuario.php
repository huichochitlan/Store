<?php
class usuario extends conexion {
  const TABLA = 'usuario';

  public function __construct(){
    // $this->conexion = conexion::conexion();
  }
  public static function lista(){
    return conexion::conexion()->query_all("SELECT * FROM usuario");
  }  
}
