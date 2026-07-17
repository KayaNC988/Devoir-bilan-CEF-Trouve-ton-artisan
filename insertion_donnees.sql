-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 17 juil. 2026 à 17:14
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

--
-- Déchargement des données de la table `artisans`
--

INSERT INTO `artisans` (`id`, `name`, `note`, `city`, `about`, `email`, `website`, `isTop`, `createdAt`, `updatedAt`, `specialtyId`) VALUES
(1, 'Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', NULL, 0, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 1),
(2, 'Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', NULL, 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 2),
(3, 'Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 3),
(4, 'Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 4),
(5, 'Orville Salmons', 5, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', NULL, 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 5),
(6, 'Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 6),
(7, 'Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 7),
(8, 'Vallis Bellemare', 4, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, '2026-06-30 07:24:17', '2026-06-30 07:24:17', 8),
(9, 'Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', NULL, 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 9),
(10, 'Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 10),
(11, 'Ernest Carignan', 5, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', NULL, 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 11),
(12, 'Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', NULL, 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 12),
(13, 'Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 12),
(14, 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 12),
(15, 'Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 13),
(16, 'Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', NULL, 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 14),
(17, 'CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, '2026-06-30 07:24:18', '2026-06-30 07:24:18', 15);

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Alimentation', '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(2, 'Bâtiment', '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(3, 'Fabrication', '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(4, 'Services', '2026-06-30 07:24:18', '2026-06-30 07:24:18');

--
-- Déchargement des données de la table `specialties`
--

INSERT INTO `specialties` (`id`, `name`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Boucher', 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(2, 'Boulanger', 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(3, 'Chocolatier', 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(4, 'Traiteur', 1, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(5, 'Chauffagiste', 2, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(6, 'Electricien', 2, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(7, 'Menuisier', 2, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(8, 'Plombier', 2, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(9, 'Bijoutier', 3, '2026-06-30 07:24:17', '2026-06-30 07:24:17'),
(10, 'Couturier', 3, '2026-06-30 07:24:18', '2026-06-30 07:24:18'),
(11, 'Ferronier', 3, '2026-06-30 07:24:18', '2026-06-30 07:24:18'),
(12, 'Coiffeur', 4, '2026-06-30 07:24:18', '2026-06-30 07:24:18'),
(13, 'Fleuriste', 4, '2026-06-30 07:24:18', '2026-06-30 07:24:18'),
(14, 'Toiletteur', 4, '2026-06-30 07:24:18', '2026-06-30 07:24:18'),
(15, 'Webdesign', 4, '2026-06-30 07:24:18', '2026-06-30 07:24:18');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
