DROP DATABASE IF EXISTS store;
CREATE DATABASE store;
  USE store;

  CREATE TABLE usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_rol INT,    
    usuario VARCHAR(80) COLLATE utf8_spanish_ci,
    contrasena VARCHAR(80) COLLATE utf8_spanish_ci,    
    nombre VARCHAR(80) COLLATE utf8_spanish_ci,
    apellidos VARCHAR(80) COLLATE utf8_spanish_ci,
    fecha_registro timestamp DEFAULT current_timestamp() ON UPDATE current_timestamp()
    estado INT    
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  --  CREATE TABLE usuario (
  --   id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  --   id_rol INT,
  --   id_tipo_registro int,
  --   email VARCHAR(80) COLLATE utf8_spanish_ci,
  --   contrasena VARCHAR(80) COLLATE utf8_spanish_ci,    
  --   nombre VARCHAR(80) COLLATE utf8_spanish_ci,
  --   apellidos VARCHAR(80) COLLATE utf8_spanish_ci,
  --   fecha_registro timestamp DEFAULT current_timestamp() ON UPDATE current_timestamp()
  --   estado INT    
  -- )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

   CREATE TABLE producto (
    id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,    
    codigo_barras VARCHAR(80) COLLATE utf8_spanish_ci,
    nombre VARCHAR(80) COLLATE utf8_spanish_ci,
    marca VARCHAR(80) COLLATE utf8_spanish_ci,
    presentacion VARCHAR(80) COLLATE utf8_spanish_ci,
    stock INT,
    estado INT,    
    fecha_registro_producto timestamp DEFAULT current_timestamp() ON UPDATE current_timestamp()
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  CREATE TABLE producto_precio (
    id_producto_precio INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    precio_entrada decimal(10,2),
    precio_salida decimal(10,2), 
    fecha_registro_precio timestamp DEFAULT current_timestamp() ON UPDATE current_timestamp()
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  CREATE TABLE producto_img (
    id_producto_img INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    nombre_img VARCHAR(80) COLLATE utf8_spanish_ci    
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  CREATE TABLE almacen (
    id_almacen INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_operacion INT,
    id_producto INT,
    cantidad int,
    fecha_registro_almacen timestamp DEFAULT current_timestamp() ON UPDATE current_timestamp()
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  CREATE TABLE ventas (
    id_venta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,    
    id_producto INT,
    id_producto_precio INT, 
    cantidad int,
    precio_venta decimal(10,2),
    fecha_registro_venta timestamp DEFAULT current_timestamp() ON UPDATE current_timestamp()
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;



  CREATE TABLE usuario_informacion_login_redes_sociales (
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    provider VARCHAR(80) COLLATE utf8_spanish_ci, 
    id VARCHAR(80) COLLATE utf8_spanish_ci,
    email VARCHAR(80) COLLATE utf8_spanish_ci,
    name VARCHAR(80) COLLATE utf8_spanish_ci,
    photoUrl VARCHAR(80) COLLATE utf8_spanish_ci,
    firstName VARCHAR(80) COLLATE utf8_spanish_ci,
    lastName VARCHAR(80) COLLATE utf8_spanish_ci,
    authToken VARCHAR(80) COLLATE utf8_spanish_ci,
    idToken VARCHAR(80) COLLATE utf8_spanish_ci,
    authorizationCode VARCHAR(80) COLLATE utf8_spanish_ci    
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  ------------
  -- catalogos
  ------------
  CREATE TABLE catalogo_usuario_rol (
    id_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(80) COLLATE utf8_spanish_ci
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  CREATE TABLE catalogo_almacen_operacion (
    id_operacion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_operacion VARCHAR(80) COLLATE utf8_spanish_ci
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

  CREATE TABLE catalogo_usuario_tipo_registro(
    id_tipo_registro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_tipo_registro VARCHAR(80) COLLATE utf8_spanish_ci
  )ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;



