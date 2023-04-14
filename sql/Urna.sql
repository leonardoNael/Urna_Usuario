create database testeVotos;

use testeVotos;
create table tbCandidatos (
	cd_can int (2) primary key,
    nome varchar (30) not null
);

create table tbVotos (
	cd_voto int (4) auto_increment primary key,
    num int (2) null
);


drop table tbVotos;

select * from tbCandidatos;
select * from tbVotos;

insert into tbVotos (num) values (null);

insert into tbCandidatos values (13, "Lula");
insert into tbCandidatos values (22, "Bolso");

