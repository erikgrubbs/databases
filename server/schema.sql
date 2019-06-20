CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id integer auto_increment not null primary key,
  user varchar(30) not null
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer auto_increment not null primary key,
  msg varchar(140) not null,
  room varchar(40),
  user integer, 
  foreign key(user) references users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

