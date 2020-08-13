<?php
require 'configuraciones.php';

function autoload($clase){	
	include "class/".$clase.".php";
}

function comprobar_caracteres_permitidos($cadena){
   //compruebo que los caracteres sean los permitidos
   $permitidos = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMÑNOPQRSTUVWXYZ0123456789-_. ";
   for ($i=0; $i<strlen($cadena); $i++){
      if (strpos($permitidos, substr($cadena,$i,1))===false){
         // echo $cadena . " no es válido<br>";
         return false;
      }
   }
   // echo $cadena . " es válido<br>";
   return true;
}


function validaruser(){
	if (!isset($_SESSION['usuario'])) {
		header ('Location: login.php');
	}
}
function comprobar_sesion(){
	if (isset ($_SESSION['usuario'])) {
		header ('Location: dashboard.php');
	}else{
		header ('Location: login.php');
	}
}
function validar_peticiones(){
	if (isset ($_SESSION['usuario'])) {
		return true;
	}else{
		return false;
	}
}
function limpiar_texto($datos){
	$datos = trim($datos);
	// $datos = stripslashes($datos);
	$datos = htmlspecialchars($datos);
	// $datos = mb_strtoupper($datos,'utf-8');
	return $datos;
}
function calcular_dias($fechaSolicitud,$fechaSolucion){
	$fechaSolicitud2 = $fechaSolicitud;
	$fechaSolicitud2 = new DateTime($fechaSolicitud2);
	$fechaSolucion = new DateTime($fechaSolucion);
	$diff = $fechaSolicitud2->diff($fechaSolucion);
	$dias = $diff->days;
	$diass = calcular_dias_hablies($dias,$fechaSolicitud);
	return ($diass);
}
function calcular_dias_hablies($dias,$fechaSolicitud){
	for ($i=1; $i<=$dias ; $i++) {
		$nuevafecha = strtotime ( "+$i day" , strtotime ( $fechaSolicitud ) ) ;
		$nuevafecha = date ( 'l' , $nuevafecha );
		//echo $nuevafecha."******<br>";
		if ($nuevafecha == "Saturday" or $nuevafecha == "Sunday") {
			$dias--;
		}
	}
	return($dias);
}
function calcular_edad( $fecha ) {
    list($Y,$m,$d) = explode("-",$fecha);
    return( date("md") < $m.$d ? date("Y")-$Y-1 : date("Y")-$Y );
}
function calcular_tiempo_desde_una_fecha($fecha){
	$fecha = new DateTime($fecha);
	$hoy = date("Y-m-d H:i:s");
	$hoy = new DateTime($hoy);
	$fecha = $fecha->diff($hoy);

	if ( $fecha->y==0) {
		$anio="";
	}else {
		if ($fecha->y==1) {
			$anio=$fecha->y." año ";
		}else {
			$anio=$fecha->y." años ";
		}

	}

	if ( $fecha->m==0) {
		$meses="";
	}else {
		if ($fecha->m==1) {
			$meses=$fecha->m." mes ";
		}else {
			$meses=$fecha->m." meses ";
		}
	}

	if ( $fecha->d==0) {
		$dias="";
	}else {
		if ($fecha->d==1) {
			$dias=$fecha->d." día ";
		}else {
			$dias=$fecha->d." días ";
		}
	}

	if ( $fecha->h==0) {
		$horas="";
	}else {
		if ($fecha->h==1) {
			$horas=$fecha->h." hora ";
		}else {
			$horas=$fecha->h." horas ";
		}

	}

	if ( $fecha->i==0) {
		$minutos=$fecha->s." segundos";
	}else {
		$minutos=$fecha->i." minutos ";
	}
	 $fecha_cadena = $anio.$meses.$dias.$horas.$minutos;
	 return($fecha_cadena);
	// printf('%d años, %d meses, %d días, %d horas, %d minutos', $fecha->y, $fecha->m, $fecha->d, $fecha->h, $fecha->i);
}
function validar_tiempos_entrega($fecha_final){

	$hoy = date('o-m-d');
	if ($hoy>$fecha_final) {
		$hoy2 = new DateTime($hoy);
		$fecha_final = new DateTime($fecha_final);
		$diff = $hoy2->diff($fecha_final);
		$dias = $diff->days;
		$dias_habiles = $dias;
		// echo $dias."<br>";
		for ($i=1; $i<=$dias ; $i++) {
			$nuevafecha = strtotime ( "+$i day" , strtotime ($hoy));
			$nuevafecha = date ( 'N' , $nuevafecha );
			// echo $nuevafecha."<br>";
			if ($nuevafecha == 6 or $nuevafecha == 7) {
				$dias_habiles--;
			}
		}
		$msg = $dias_habiles." día(s) de retraso";
		$estado = 3;
		return array($estado,$msg);
	}elseif ($hoy<$fecha_final) {

		$fecha_final2 = new DateTime($fecha_final);
		$hoy = new DateTime($hoy);
		$diff = $fecha_final2->diff($hoy);
		$dias = $diff->days;
		$dias_habiles = $dias;
		// echo $dias."<br>";
		for ($i=1; $i<=$dias ; $i++){
			$nuevafecha = strtotime ( "+$i day" , strtotime ($fecha_final)) ;
			$nuevafecha = date ( 'N' , $nuevafecha );
			// echo $nuevafecha."<br>";
			if ($nuevafecha == 6 or $nuevafecha == 7) {
				$dias_habiles--;
			}
			$estado = 1;
			$msg = $dias_habiles." día(s) para la entrega";
		}return array($estado,$msg);
		// echo $dias."<br>";
	}else {
		$msg = "Hoy termina el plazo";
		$estado = 2;
		return array($estado,$msg);
	}
}
function timequery(){
  static $querytime_begin;
  list($usec, $sec) = explode(' ',microtime());

  if(!isset($querytime_begin))
  {
    $querytime_begin= ((float)$usec + (float)$sec);
  }
  else
  {
    $querytime = (((float)$usec + (float)$sec)) - $querytime_begin;
    echo sprintf('<br />La consulta tardó %01.5f segundos.- <br />', $querytime);
  }
}


?>
