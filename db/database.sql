CREATE DATABASE IF NOT EXISTS DB_APP;

USE DB_APP;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT
    nombre VARCHAR(45) DEFAULT NULL,
    sueldo INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
(1, 'Fernando', 1000),
(2, 'Emmanuel', 2000),
(3, 'Samanta', 2500),
(4, 'Santiago', 1500);

CREATE TABLE usuarios(
	id_usuario INT(11) NOT NULL AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    passward VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_usuario)
);

INSERT INTO usuarios VALUES
(1, 'Efrain', '123'),
(2, 'Juan', '123456');

CREATE TABLE tareas (
	id_tarea INT(11) NOT NULL AUTO_INCREMENT,
    descripcion TEXT,
    fecha_limite DATE,
    PRIMARY KEY (id_tarea)
);

INSERT INTO tareas VALUES
(1, 'Pagina Web', '05/06/2024');