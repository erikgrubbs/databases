DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id integer auto_increment not null primary key,
  room varchar(20) not null
);

CREATE TABLE users (
  id integer auto_increment not null primary key,
  user varchar(30) not null
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer auto_increment not null primary key,
  msg varchar(140) not null,
  user integer, 
  room integer,
  foreign key(user) references users(id),
  foreign key(room) references rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

