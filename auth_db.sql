-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2024 at 05:24 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `desc` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `name`, `price`, `stock`, `desc`, `image`, `url`, `userId`, `createdAt`, `updatedAt`) VALUES
(3, '17ad353d-a028-401b-a54b-dd2cd987a0bf', 'Mesin Cuci 2 Tabung Toshiba VH-H85MN 8KG Low Watt Cuci dan Kering updated', 1316000, 76, 'Produk Spesifikasi :\nWarna : Abu-abu\nTegangan Listrik : 220V/50Hz\nKapasitas Pencucian/(kg) : 8 Kg\nKapasitas Pengeringan/(kg) : 5 KG\nDaya Listrik Pencucian/(W) : 140W\nDaya Listrik Peras/pengeringan : 135W\nDimensi : 761 x 448 x 885 mm\nBerat bersih : 19 kg', '5bf73c70534e78560e8560acbb944b79.png', 'http://localhost:5000/images/5bf73c70534e78560e8560acbb944b79.png', 1, '2024-03-18 04:40:41', '2024-04-12 14:04:16'),
(4, 'b11398ed-45a2-4cce-b284-1c87539b96cc', 'TCL 40 Inch Google TV - 40G9 - FHD - Google Audio - WiFi - 40G9', 791999, 71, 'lorem', NULL, NULL, 1, '2024-03-18 04:41:36', '2024-04-03 02:37:00'),
(6, 'c57b6d85-3d6e-4ddf-9346-f4f747e6dc71', 'Sanwoo Air Fryer 5.2L LARGE SIZE KOR-5508DI', 791000, 125, 'lorem', NULL, NULL, 3, '2024-03-18 06:18:44', '2024-03-18 06:18:44'),
(9, 'dfc625c5-9cb9-40e0-91ff-dcb6843f89fc', 'BUY 3 Sensodyne Advanced Care Extra Fresh 100grx3', 110000, 51, 'lorem', NULL, NULL, 1, '2024-04-02 10:33:27', '2024-04-02 10:33:27'),
(10, '6168a6a3-e141-49e0-9098-2cf9f8da78b6', 'Regulator Gas LPG RECA / KOSANGAS Quick-On 634 dari Denmark / Eropa', 599000, 14, 'Regulator Compact Quick-on 634 dilengkapi THERMOFUSE. Thermofuse ini akan menutup aliran gas secara permanen di atas batas suhu tertentu.\nSesuai dengan standard keselamatan di EROPA.', 'cdb7d6c37bb9f2d50787d4e8ef15d6cd.png', 'http://localhost:5000/images/cdb7d6c37bb9f2d50787d4e8ef15d6cd.png', 1, '2024-04-12 10:33:20', '2024-04-12 10:33:20'),
(11, '3db8c742-3927-46e0-8521-6fe6d92268e4', 'EIGER REVEAL 18 LAPTOP BACKPACK - Olive', 417000, 0, 'Dimension: 28 x 17 x 43 cm (Vol 18L)\nMaterial: Polyester 600D, Ripstop Double Face\n\nFitur:\nKompartemen utama dengan saku laptop 14.\nSaku depan dengan organizer.\nSaku untuk memuat botol minum di bagian samping.\nSaku samping.', '13aaf24994d602f266c9c230d4a40bd9.jpg', 'http://localhost:5000/images/13aaf24994d602f266c9c230d4a40bd9.jpg', 1, '2024-04-12 17:48:00', '2024-04-12 17:48:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('gxK9lN2tWqmwkazKEn_B3AZidFh7wtwi', '2024-04-15 14:07:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:07:42', '2024-04-14 14:07:42'),
('MXM0yGrb13krL2xJp6g1kP-3ac16Ocwy', '2024-04-15 14:09:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:09:50', '2024-04-14 14:09:50'),
('OwB4vZOq_JAC4kiw8ajcwwEz9o-pYAwU', '2024-04-15 14:07:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:07:47', '2024-04-14 14:07:47'),
('PUJTt9306dBzjUx3GCddqL5FaterX9Yq', '2024-04-15 14:07:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:07:04', '2024-04-14 14:07:04'),
('R_2EeaKxuRNPO9qinIvUBTS3n9BJajzA', '2024-04-15 14:09:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:09:41', '2024-04-14 14:09:41'),
('t5IZmUj2GxpgdxC_eptRaVpEGiE0ZP8Y', '2024-04-15 14:16:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:09:51', '2024-04-14 14:16:27'),
('vKr1pakQiGxZb0bHNX7aLu3NwN8U92BC', '2024-04-15 14:06:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:06:57', '2024-04-14 14:06:57'),
('wlcRkLIzXbtGzZoKImxBVKaQe1smzkxI', '2024-04-15 14:09:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-04-14 14:09:51', '2024-04-14 14:09:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'f443533b-a281-48c2-bb5a-a7b07672f13a', 'Ucup', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$OYDl1kPgKASxUeO7DuzTEg$YOu25Um4w5Bvyz2aZdvrp2pT5b+5G56GDFE7RfAxZ18', 'admin', '2024-03-17 16:01:14', '2024-03-17 16:01:14'),
(3, '0f4325d3-59e4-46df-90fc-c120e1a6f8b0', 'Bambang', 'bambang@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Cpp4e0t73V8L317bFRM7Ag$VOI3A4LJB5OWCEj6ZEGVWoo9ySLDmtZFc3cFUn12hLU', 'user', '2024-03-18 01:49:04', '2024-03-18 01:49:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
