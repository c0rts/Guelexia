create DATABASE Datalexia;
use Datalexia;

create table usuarioinfo(
ID int (10) NOT NULL auto_increment,
nome varchar (50) NOT NULL,
email varchar (80) NOT NULL,
senha varchar (30) NOT NULL,
primary key (ID),
ft int (2)
);