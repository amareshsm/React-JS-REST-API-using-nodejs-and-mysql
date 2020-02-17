-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2020 at 03:04 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `food_recipes`
--

CREATE TABLE `food_recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `publisher` varchar(256) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `publisher_id` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `food_recipes`
--

INSERT INTO `food_recipes` (`id`, `name`, `publisher`, `description`, `img`, `publisher_id`) VALUES
(1, 'VEG PIZZA  ', 'KUMAR', '5 tablespoons butter, melted14 sheets phyllo dough (14x9 in.)7 tablespoons grated Parmesan cheese, divided1 cup shredded part-skim mozzarella cheese1 cup thinly sliced onion1 pound plum tomatoes, sliced1-1/2 teaspoons minced fresh oregano or 1/2 teaspoon dried oregano', 'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking.jpg', '1'),
(2, 'VEG NOODLES', 'JOHN SKEET', '2 tablespoons vegetable oil (30 mL)\r\n5 cloves garlic, minced\r\n4 spring onions, divided\r\n2 carrots, cut into matchsticks\r\n1 cup snap pea (100 g)\r\n2 tablespoons brown sugar\r\n3 tablespoons soy sauce', 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-noodles-vegetables-egg.jpg', '2'),
(3, 'PAN CAKE ', 'MICHEAL ', 'Cooking spray\r\n\r\n1 cup unsweetened cocoa powder (natural or Dutch process)\r\n\r\n2 1/2 cups all-purpose flour\r\n\r\n2 cups sugar\r\n\r\n1 1/2 teaspoons baking powder\r\n\r\n1 teaspoon baking soda\r\n\r\n1 teaspoon salt\r\n\r\n3 large eggs, at room temperature\r\n\r\n3/4 cup vegetable oil', 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes.jpg', '3'),
(4, 'LIME WATER', 'TEJAS', '1 oz lime sliced\r\n1 oz lemon sliced\r\n1 tbsp lime juice\r\n1 quart water\r\n1 tbsp mint leaves', 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pouring-water.jpg', '4'),
(5, 'FRIED RICE', 'KENEDY', 'White long grain rice\r\nSmall white onion  \r\nVegetables- Peas and Carrots.  broccoli, cauliflower, asparagus, snow peas and cabbage.\r\nEggs\r\nSesame Oil \r\nSoy Sauce\r\nGreen Onions', 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-fried-rice.jpg', '4'),
(6, 'NEAPOLITAN PIZZA\r\n', 'NIKOL TESLA', '2 tablespoons vegetable oil (30 mL)\r\n5 cloves garlic, minced\r\n4 spring onions, divided\r\n2 carrots, cut into matchsticks\r\n1 cup snap pea (100 g)\r\n2 tablespoons brown sugar\r\n3 tablespoons soy sauce\r\n', 'https://www.foodiesfeed.com/wp-content/uploads/2019/07/neapolitan-pizza-margherita.jpg', '3'),
(7, 'PISTACHIO CROISSANT', 'JOHN KUM', '60 grams green peas (matar) or ? cup green peas\r\n100 grams onion or 1 large onion or 1 cup thinly sliced onions\r\n1.5 to 2 tablespoons oil\r\n½ teaspoon ginger-garlic paste\r\n¼ teaspoon turmeric powder (haldi)', 'https://www.foodiesfeed.com/wp-content/uploads/2019/10/pistachio-croissant.jpg', '2'),
(8, 'PANI PURI', 'HARI', 'PURI FILLED WITH FLAVOURED WATER ', 'https://i.pinimg.com/236x/0f/87/f1/0f87f196d1f7ec2cc9a9cbad3e58d9f9.jpg', '2'),
(9, 'DOSA', 'KUMAR', '3/4 cup Parboiled Rice (idli-dosa rice) 3/4 cup Regular Rice 1/2 cup Whole Urad Dal (without skin) or Split Urad Dal (black lentils) 1/4 teaspoon Fenugreek Seeds (methi dana) 1/2 tablespoon Chana Dal (gram lentils), optional', 'https://files2.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg', '5'),
(10, 'TESLA', 'HARI', '2 tablespoons vegetable oil (30 mL)\r\n5 cloves garlic, minced\r\n4 spring onions, divided\r\n2 carrots, cut into matchsticks\r\n1 cup snap pea (100 g)\r\n2 tablespoons brown sugar\r\n3 tablespoons soy sauce\r\n', 'https://www.foodiesfeed.com/wp-content/uploads/2019/07/neapolitan-pizza-margherita.jpg', '6');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` text,
  `last_name` text,
  `email` text,
  `password` text,
  `created` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`) VALUES
(1, 'name', 'last', 'admin@admin.com', '$2b$10$Y2.Gk072m606gZ0FfKzT6en.FB/e27ebITdXpEWTLd/O.4tDm72Ie', '2020-02-11 16:12:29'),
(2, 'amaresh', 'amaresh', 'amareshsm13@gmail.com', '$2b$10$lms7Cf51BOQ6/kPUepj9oe.whW6mzhAAFjjRHpt5mdB5x7A7w66pG', '2020-02-11 16:18:03'),
(3, 'hi', 'hello', 'hello@gmail.com', '$2b$10$HTzHbW9jKGsL..fJZhJ.PO1PNFg/s7v6cKVPWo4.6kwq0DAeVpwUi', '2020-02-11 18:15:39'),
(4, 'newuser', 'newuser', 'newuser@gmail.com', '$2b$10$fKiqZ/Gy41c6M51m4p1F6eLd9qa5p3BlTuTDeYgAC7u7JVYwiwQQK', '2020-02-11 18:36:31'),
(5, 'amar', 'amr', 'amar@gmail.com', '$2b$10$qFrSdL.1oSpbK.KaB8s4Le.lIZZFQ2XBphtQtqmUGw8pdLfDzi.2i', '2020-02-14 15:37:10'),
(6, 'name', 'last', 'hello1@gmail.com', '$2b$10$/C0a9ahZPb.7O1LryIQofOfw/jkeEpRCUeTXCRY5asA0oZTdmNvFa', '2020-02-14 15:44:53'),
(7, 'aaa', 'aaaa', 'amaresh123@gmail.com', '$2b$10$Tcz.MLUPkfmacmx6oU118eCg.zu8wE7Fc0hExL0yS7eGe5vghSng2', '2020-02-14 16:03:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food_recipes`
--
ALTER TABLE `food_recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food_recipes`
--
ALTER TABLE `food_recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
