CREATE DATABASE IF NOT EXISTS `psi`;
Use `psi`;

CREATE TABLE `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `genero` VARCHAR(10) NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `correoElectronico` VARCHAR(45) NULL,
  `nacimiento` VARCHAR(10) NULL,
  `coordenadas` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  DESCRIBE usuarios;

  INSERT INTO usuarios VALUES 
  (1, 'Masculino', 'Juan', 'Perez', 'juan@gmail.com' , '1990-01-01', '19.432608,-99.133209'),
  (2, 'Femenino', 'Maria', 'Lopez', 'maria@gmail.com' , '1990-01-01', '19.432608,-99.133209'),
  (3, 'Masculino', 'Pedro', 'Gomez', 'pedro@gmail.com' , '1990-01-01', '19.432608,-99.133209');
  
    