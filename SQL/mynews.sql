-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 30 mai 2023 à 08:47
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mynews`
--

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title`, `type`, `date`, `content`) VALUES
(11, 'DERNIERE TOURN2E DES SHAKA PONK', 'MUSIQUE', '2023-05-25', 'la derniere trounée des shaka ponk arrive !'),
(12, 'WOW PATCH 10.1', 'JEUX VIDEO', '2023-05-25', 'le patch 10.1 est sortie et son nouveau raid vous réserve une surprise...'),
(13, 'CLEOPATRE', 'CINEMA', '2023-05-25', 'Le documentaire de Cléopatre fait polémique : l\'Egypte porte plainte contre le grand Netflix'),
(14, '(PRESQUE) BLANCHE NEIGE', 'CINEMA', '2023-05-25', 'Disney supprime les personnes caucasiens ?'),
(15, 'LE FESTIVAL DES LUMIERE 2E EDITION', 'EVENEMENT', '2023-05-25', 'Le festival des lumière fait son retour !'),
(16, 'BRANBLE ', 'JEUX VIDEO', '2023-05-25', 'Le jeu video inspiré de la mythologie scandinave fait grande impression !'),
(17, 'HOGWART LEGACY', 'JEUX VIDEO', '2023-05-25', 'Le jeu video inspiré de l\'univers Harry Potter est  disponible sur toute les plateformes, excepté la switch');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rôle` tinyint(1) NOT NULL,
  `pseudo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `rôle`, `pseudo`) VALUES
(6, 'a@a', '$2b$08$alX0D80Hssouv6Z6h/puBuhlxxz./X.lPOUaNYuPUZZpyjeVti1ba', 0, 'oaiej'),
(7, 'b@t', '$2b$08$lqt3bIkVQwd1VA2o7FzTquKLMmbAU4dODl/AUQEXf3lBSnDq71vdm', 0, 'riusygb'),
(8, 'p@p', '$2b$08$vh62wFmZE35BRJr/EJ43m.Z1zgP.9lNS9o5SkupSEVALprNOAxO0C', 0, 'zurgh'),
(9, 'flo@crespel.com', '$2b$08$Aexdb6SlMW1H1G3fMguIiuQSw9eoGnCHjqkRoMNIFoQm4/f/XbuMW', 1, 'Funkins');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
