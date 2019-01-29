CREATE DATABASE sequelizeBurgers_db;

USE sequelizeBurgers_db;

CREATE TABLE burgers (
id INT auto_increment,
burger_name VARCHAR (250),
devoured boolean,
PRIMARY KEY (id)
);