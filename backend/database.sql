DROP TABLE IF EXISTS `knight`;

CREATE TABLE `knight` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `is_dubbed` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `knight` WRITE;

INSERT INTO `knight` VALUES
(1,'Arthur',40,1),
(2,'Perceval',35,1),
(3,'Lancelot',38,1);

UNLOCK TABLES;
