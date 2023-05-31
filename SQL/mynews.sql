-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 31 mai 2023 à 15:13
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
  `content` text NOT NULL,
  `viewCounter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title`, `type`, `date`, `content`, `viewCounter`) VALUES
(11, 'DERNIERE TOURNEE DES SHAKA PONK', 'MUSIQUE', '2023-05-25', 'la derniere trounée des shaka ponk arrive !', 0),
(12, 'WOW PATCH 10.1', 'JEUX VIDEO', '2023-05-25', 'le patch 10.1 est sortie et son nouveau raid vous réserve une surprise...', 0),
(13, 'CLEOPATRE', 'CINEMA', '2023-05-25', 'Le documentaire de Cléopatre fait polémique : l\'Egypte porte plainte contre le grand Netflix', 0),
(14, '(PRESQUE) BLANCHE NEIGE', 'CINEMA', '2023-05-25', 'Disney supprime les personnes caucasiens ?', 0),
(15, 'LE FESTIVAL DES LUMIERE 2E EDITION', 'EVENEMENT', '2023-05-25', 'Le festival des lumière fait son retour !', 0),
(16, 'BRANBLE ', 'JEUX VIDEO', '2023-05-25', 'Le jeu video inspiré de la mythologie scandinave fait grande impression !', 0),
(17, 'HOGWART LEGACY', 'JEUX VIDEO', '2023-05-25', 'Le jeu video inspiré de l\'univers Harry Potter est  disponible sur toute les plateformes, excepté la switch', 0),
(18, 'FOO FIGHTERS LE NOUVEAU DEPART', 'MUSIQUE', '2023-05-30', 'Apres la mort de Taylor Hawkins, le groupe Foo Fighters reprend de l\'avant et sort un album prochainement !', 0),
(19, 'OKEMAH RISING : DROPKICK MURPHYS', 'MUSIQUE', '2023-05-30', 'Le nouvel album de dropkick murphys est disponible !', 0),
(20, 'LE JEUX DU PENDU VERSION IRL', 'MUSIQUE', '2023-05-30', 'Apres avoir jouer au jeu du pendu, le chanteur de Link Park Chester Bennington a pris le jeu trop au sérieux...', 0),
(21, 'GESTION DE TICKET !', 'MUSIQUE', '2023-05-30', 'Le jeune développeur Andrew Carpentier sort son nouveau site de billetterie en ligne ! Promos assurées en passant par FENEU', 0),
(22, 'GOLUM LE FLOP', 'JEUX VIDEO', '2023-05-30', 'Le dernier jeu inspiré de l\'univers seigneur des anneaux fait un flop total.', 0),
(23, 'ZELDA : TEARS OF THE KINGDOM', 'JEUX VIDEO', '2023-05-30', 'Le dernier jeu Zelda fait son carton plein !', 0),
(24, 'FAST N FURIOUS 1575205787', 'CINEMA', '2023-05-30', 'Le film de la serie fast n furious sort son 1575205787e, mais plus de voiture ?!', 0),
(25, 'LES GARDIENS DE LA GALAXIE 3', 'CINEMA', '2023-05-30', 'Brigitte Bardot serai derrière la production ?', 0),
(26, 'PEACKY BLINDER : LE FILM', 'CINEMA', '2023-05-30', 'Le tournage du film qui signe la fin de la serie Peacky Blinder a commencé ce mois ci et sera disponible fin 2023 voir debut 2024.', 1),
(27, 'CATHEDRALE DE DIABLO A CAMBRAI', 'EVENEMENT', '2023-05-30', 'La cathedrale de Cambrai ouvre ses portes et est maintenant appelé la Cathédrale de diablo, en hommage à l\'univers de diablo.', 0),
(28, 'JAPAN EXPO 2023', 'EVENEMENT', '2023-05-30', 'La japan expo de l\'année 2023 aura lieux le weekend du 14 juillet.', 2),
(29, 'LE TRIAL DES HOBBIT : 2023', 'EVENEMENT', '2023-05-30', 'Les hobbits de la comté vous attends pour sa randonné annuelle le weekend du 3 juin.', 49);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
