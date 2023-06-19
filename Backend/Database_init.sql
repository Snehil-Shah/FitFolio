CREATE DATABASE fitfolio;
USE fitfolio;

CREATE TABLE Users (
    Email varchar(35),
    Pass varchar(30),
    UserName varchar(30),
	Subscription varchar(10),
    Age int,
    Height_cm int,
    Weight_kg int,
    PRIMARY KEY (Email)
);

INSERT INTO users VALUES('base@test.com','password','base','free',18,170,60);


