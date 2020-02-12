-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2020 a las 22:52:42
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudtechchallenge`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `description`, `stock`) VALUES
(1, 'Ipad', '4200.00', 'Ipad Pro 2019', 16),
(2, 'Xbox one', '5000.00', 'Xbox one 1 tb', 10),
(4, 'Celular', '5000.00', 'Celular Xiaomi', 409),
(5, 'Cartera', '400.00', 'Piel', 4),
(8, 'Nuevo', '2000.00', 'Un producto nuevo fue editado', 120),
(9, 'Compuradora Escritorio', '7000.00', 'Computadora escritorio Gateway', 12),
(10, 'Impresora HP', '800.00', 'Marca HP ', 23),
(11, 'Mouse inalambrico', '200.00', 'Mouse marca logitech', 45),
(12, 'Monitor Samsung', '3500.00', 'Monitor FullHD', 45),
(14, 'Cable USB', '120.00', 'Cable 1 mt', 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase`
--

CREATE TABLE `purchase` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `date_purchase` date NOT NULL,
  `customer_name` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `purchase`
--

INSERT INTO `purchase` (`id`, `id_product`, `date_purchase`, `customer_name`, `quantity`) VALUES
(1, 2, '2020-02-11', NULL, 0),
(2, 2, '2020-02-11', 'Juan', 0),
(3, 4, '2020-02-11', 'Miguel', 3),
(4, 4, '2020-02-11', 'Juan', 5),
(5, 4, '2020-02-11', 'Juan', 5),
(6, 4, '2020-02-11', 'Juan', 5),
(7, 5, '2020-02-11', 'Miguel', 1),
(8, 5, '2020-02-11', 'Miguel', 1),
(9, 5, '2020-02-11', 'Miguel', 1),
(10, 5, '2020-02-11', 'Miguel', 1),
(11, 5, '2020-02-11', 'Miguel', 1),
(12, 8, '2020-02-11', 'Miguel', 3),
(13, 4, '2020-02-11', 'Miguel', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
