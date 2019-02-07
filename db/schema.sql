DROP DATABASE IF EXISTS gamelogger_db;
CREATE DATABASE gamelogger_db;
USE gamelogger_db;

CREATE TABLE videogames (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    completed BOOLEAN
);