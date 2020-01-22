-- Drops the "fullstackprep" database if it exists currently --
DROP DATABASE IF EXISTS full_stack_prep_db;
-- Creates the "fullstackprep" database --
CREATE DATABASE full_stack_prep_db;

USE full_stack_prep_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
    picture varchar(2000),
	PRIMARY KEY (id)
);

CREATE TABLE levels
(
	id int NOT NULL AUTO_INCREMENT,
	topic_level TINYINT NOT NULL,
	topic_description varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE topics
(
	id int NOT NULL AUTO_INCREMENT,
	topic varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE questions
(
	id int NOT NULL AUTO_INCREMENT,
	topic_id INT NOT NULL,
    question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
    level_id INT NOT NULL,
    timer INT NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (topic_id) REFERENCES topics(id),
	FOREIGN KEY (level_id) REFERENCES levels(id)
);

CREATE TABLE userprogress
(
	id int NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
	topic_id INT NOT NULL,
    level_id INT NOT NULL,
    topic_mastered BOOLEAN NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (topic_id) REFERENCES topics(id),
    FOREIGN KEY (level_id) REFERENCES levels(id)
);









