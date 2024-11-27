-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for descubre_colombia
CREATE DATABASE IF NOT EXISTS `descubre_colombia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `descubre_colombia`;

-- Dumping structure for table descubre_colombia.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `tipoIdentificacion` varchar(20) NOT NULL,
  `numeroIdentificacion` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `nacionalidad` varchar(50) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `numeroCelular` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tipoSangre` varchar(10) DEFAULT NULL,
  `eps` varchar(50) DEFAULT NULL,
  `contactoEmergencia` varchar(100) DEFAULT NULL,
  `numeroEmergencia` varchar(20) DEFAULT NULL,
  `codigoReserva` varchar(50) DEFAULT NULL,
  `politica` text,
  PRIMARY KEY (`idCliente`),
  UNIQUE KEY `numeroIdentificacion` (`numeroIdentificacion`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `codigoReserva` (`codigoReserva`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table descubre_colombia.clientes: ~0 rows (approximately)
INSERT INTO `clientes` (`idCliente`, `tipoIdentificacion`, `numeroIdentificacion`, `nombre`, `apellidos`, `nacionalidad`, `ciudad`, `numeroCelular`, `email`, `tipoSangre`, `eps`, `contactoEmergencia`, `numeroEmergencia`, `codigoReserva`, `politica`) VALUES
	(2, 'CEDULA', '11237654', 'Segundo ', 'hiroshima', 'Colombia', 'Aguada', '3213127957', 'est_seguridad_80@unbosque.edu.co', 'B NEGATIVO', 'Salud Colmena', 'Jennifer fory', '3121221234', '1234', 'si');

-- Dumping structure for table descubre_colombia.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `usuarioId` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `anoNacimiento` year NOT NULL,
  `estado` varchar(20) NOT NULL,
  PRIMARY KEY (`usuarioId`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table descubre_colombia.usuarios: ~2 rows (approximately)
INSERT INTO `usuarios` (`usuarioId`, `usuario`, `password`, `anoNacimiento`, `estado`) VALUES
	(1, 'logan6230', 'e10adc3949ba59abbe56e057f20f883e', '1987', 'ACTIVO'),
	(3, 'mariapilar56', '14e1b600b1fd579f47433b88e8d85291', '1988', 'ACTIVO');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
