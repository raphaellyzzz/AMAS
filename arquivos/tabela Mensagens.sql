Create DATABASE Formularioo;

USE Formularioo;

Create Table Mensagens(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nome Varchar (50) NOT NULL,
    Email Varchar (100) NOT NULL,
    Telefone Varchar(70) NOT NULL,
    Cidade Varchar (80) NOT NULL,
    Mensagens text NOT NULL
);
