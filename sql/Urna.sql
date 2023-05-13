create database dbUrna;

use dbUrna;

drop database urna;

create table tbCanSen (
	cd_can int (3) primary key,
    nome varchar (35) not null
);

create table tbCanGov (
	cd_can int (2) primary key,
    nome varchar (35) not null
);

create table tbCanPres (
	cd_can int (2) primary key,
    nome varchar (35) not null
);

create table tbSenador (
	cpf numeric (11) primary key,
    num int (3) null
);

create table tbGovernador (
	cpf numeric (11) primary key,
    num int (2) null
);

create table tbPresidente (
	cpf numeric (11) primary key,
    num int (2) null
);

/*Controles*/
drop table tbSenador;
drop table tbPresidente;
drop table tbGovernador;

select * from tbSenador;
select * from tbGovernador;
select * from tbPresidente;
/*Controles*/

insert into tbCanSen values (123, "Aldo Rebelo");
insert into tbCanSen values (222, "Astronauta Marcos Pontes");
insert into tbCanSen values (270, "Dr. Azkoul");
insert into tbCanSen values (155, "Edson Aparecido");
insert into tbCanSen values (287, "Janaina Paschoal");
insert into tbCanSen values (161, "Mancha Coletivo Socialista");
insert into tbCanSen values (400, "Marcio França");
insert into tbCanSen values (211, "Prof. Tito Bellini");
insert into tbCanSen values (300, "Ricardo Mellao");
insert into tbCanSen values (800, "Vivian Mendes");

insert into tbCanGov values (16, "Altino");
insert into tbCanGov values (27, "Antonio Jorge");
insert into tbCanGov values (80, "Carol Vigliar");
insert into tbCanGov values (29, "Edson Dorta");
insert into tbCanGov values (12, "Elvis Cezar");
insert into tbCanGov values (13, "Fernando Haddad");
insert into tbCanGov values (21, "Gabriel Colombo");
insert into tbCanGov values (45, "Rodrigo Garcia");
insert into tbCanGov values (10, "Tarcisio");
insert into tbCanGov values (30, "Vinicius Poit");

insert into tbCanPres values (12, "Ciro Gomes");
insert into tbCanPres values (27, "Constituinte Eymael");
insert into tbCanPres values (30, "Felipe Davila");
insert into tbCanPres values (22, "Jair Bolsonaro");
insert into tbCanPres values (80, "Leo Pericles");
insert into tbCanPres values (13, "Lula");
insert into tbCanPres values (14, "Padre Kelmon");
insert into tbCanPres values (15, "Simone Tebet");
insert into tbCanPres values (44, "Soraya Thronicke");
insert into tbCanPres values (16, "Vera");