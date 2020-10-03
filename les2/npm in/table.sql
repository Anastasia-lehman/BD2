CREATE TABLE brand(
	id SERIAL PRIMARY KEY,
	name varchar(255) not null,
	country varchar (255) not null
);

CREATE TABLE car (
	id SERIAL PRIMARY KEY,
	brand_id varchar (255) not null,
	model varchar (255) not null,
	cost money,
	date_of_creation NUMERIC (4,0) not null,
	is_available boolean not null,
	created_at TIMESTAMP not null default now(),
	updated_at TIMESTAMP not null default now(),
	deleted_at TIMESTAMP
);



INSERT INTO brand (name, country) VALUES
('BMV','Germany'),
('Lada', 'Russia'),
('Honda', 'Japan'),
('Tesla','USA');

INSERT INTO car (brand_id, model, cost, date_of_creation, is_available) VALUES
(1,'520D', 2000000,2017,true),
(2,'XRay', 800000,2018,true),
(3,'Model S', 125000000,2020,false),
(1,'M5', 7000000,2018,true);


CREATE TABLE manager(
	id SERIAL PRIMARY KEY,
	name varchar(255) not null,
	surname varchar(255) not null,
	car_id INTEGER REFERENCES car(id)
);


INSERT INTO manager (name, surname, car_id) VALUES
('Ivan', 'Ivanov', 1),
('Fill', 'Fillov', 2),
('Kole', 'Kolen', null);



