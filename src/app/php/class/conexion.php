<?php
// ini_set ('date.timezone','America/Mexico_City');
class conexion extends PDO {
  private $tipo_de_base = 'mysql';
  private $host = 'localhost';
  private $nombre_de_base = 'store';
  private $usuario = 'root';
  private $contrasena = '';  
  public function __construct() {
    //Sobreescribo el método constructor de la clase PDO.
    try{
      parent::__construct("{$this->tipo_de_base}:dbname={$this->nombre_de_base};host={$this->host};charset=utf8", $this->usuario, $this->contrasena);
    }catch(PDOException $e){
      echo 'Ha surgido un error y no se puede conectar a la base de datos. Detalle: ' . $e->getMessage();
      exit;
    }
  }
  public static function conexion(){
    $conexion = new conexion();
    return $conexion;
  }
  public static function query_all($query){
    // retorna una tabla de valores
    $resultado = conexion::conexion()->query($query);
    return $resultado->fetchAll(PDO::FETCH_OBJ);
  }
  public static function query_one($query){
    // retorna solo una fila
    $resultado = conexion::conexion()->query($query);
    return $resultado->fetch(PDO::FETCH_OBJ);
  }
}
?>
