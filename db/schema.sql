CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(70) NOT NULL,
	devoured BOOLEAN,
	date TIMESTAMP
);

