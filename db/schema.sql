-- DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NULL,
	devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);

-- SELECT * FROM burgers;

-- SET SQL_SAFE_UPDATES = 0;
