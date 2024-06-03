-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 23 Φεβ 2024 στις 18:52:21
-- Έκδοση διακομιστή: 10.4.32-MariaDB
-- Έκδοση PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `database123`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `entry_details_ecommerce`
--

CREATE TABLE `entry_details_ecommerce` (
  `name_surname` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address_1` varchar(255) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `entry_details_ecommerce`
--

INSERT INTO `entry_details_ecommerce` (`name_surname`, `phone_number`, `address_1`, `postal_code`, `email`) VALUES
('b', 'b', 'b', '', 'b'),
('b', 'b', 'b', '', 'b'),
('Angelos', '6912345678', '15015', '', 'Angelos@gmail.com'),
('Anthoula', '6987654321', '15045', '', 'Anthoula@gmail.com'),
('John Doe', '6912121212', 'Athinas 35', '15015', 'Jd@gmail.com'),
('George', '6900039023', 'Athinas 35', '00100', 'george@gmail.com'),
('Dev', '151515000', 'Athinas 35', '15033', 'dev@gmail.com'),
('AnthTarp', '6969000000', 'Athinas 35', '15031', 'AnthTarp@gmail.com'),
('AnthTarpaaaa', '6969000000', 'Athinas 35', '15031', 'AnthTarpaaa@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
