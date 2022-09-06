DROP DATABASE IF EXISTS `store`;
CREATE DATABASE `store`;
USE `store`;

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `quantity_in_stock` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `picture` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `popularity` tinyint NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `products` VALUES (1,'Redmi note 10','telefono',1,425,
'https://mobilestore.ec/wp-content/uploads/2021/04/Redmi-Note-10-Pro-Azul-Mobile-Store-Ecuador.jpg',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat.', 2);
 INSERT INTO `products` VALUES (2,'HP Notebook 15','laptop',10,650,
'https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/1/612B4LA-1_T1649792968.png',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat.', 5);
 INSERT INTO `products` VALUES (3,'Macbook Pro M1','laptop',10,3500,
'https://mobilestore.ec/wp-content/uploads/2020/11/MacBook-Pro-M1-Mobile-Store-Ecuador.jpg',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat.', 5);
 INSERT INTO `products` VALUES (4,'Samsung Galaxy S21 Ultra','telefono',10,700,
'https://mobilestore.ec/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-Mobile-Store-Ecuador.jpg',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat.', 4);

CREATE TABLE `order_items` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `iva_price` int(11) NOT NULL,
  `ship_cost` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  PRIMARY KEY (`order_id`,`product_id`),
  KEY `fk_order_items_products_idx` (`product_id`),
  CONSTRAINT `fk_order_items_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;