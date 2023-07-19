drop database if exists JavsDB;
create database if not exists JavsDB;
use JavsDB;

create table Customer(
FirstName VARCHAR(50),
LastName VARCHAR(50),
Email VARCHAR(50)
);