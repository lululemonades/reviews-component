DROP DATABASE IF EXISTS  lululemon;
CREATE DATABASE lululemon;
USE lululemon;

-- DROP TABLE IF EXISTS reviews;
CREATE TABLE products (
	id int NOT NULL PRIMARY KEY
);

-- DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nickname varchar(50) NOT NULL,
	age int,
	body_type varchar(25),
	athletic_type varchar(25),
	city varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
	country varchar(50) NOT NULL
);

-- body types: curvy, athletic, lean, petite, muscular, slim, solid
-- athletic types: sweaty generalist, yogi, runner, dancer, cyclist

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	-- created_at datetime NOT NULL,
	title varchar(50) NOT NULL,
	details varchar(500) NOT NULL,
	fit varchar(50) NOT NULL,
	what_you_like varchar (25),
	what_you_didnt_like varchar(25),
	user_id int NOT NULL,
	product_id int NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);


-- second skin, tight, snug, just right, roomy, oversized, flowy

INSERT INTO products (id) VALUES (1);

INSERT INTO users (id, nickname, age, body_type, athletic_type, city, state, country) 
	VALUES (1000, "jmicca", 24, "athletic", "yogi", "irvine", "ca", "usa");
INSERT INTO users (id, nickname, age, body_type, athletic_type, city, state, country) 
	VALUES (1001, "smonno", 33, "curvy", "runner", "yerbavista", "ca", "usa");

-- need to add createdAtt to the next line
INSERT INTO reviews (title, details, fit, what_you_like, what_you_didnt_like, user_id, product_id)
	VALUES ("almost there...", "i really wanted to love these but the material just isn't good.", 
					"tight", "the style", "the material", 1000, 1)