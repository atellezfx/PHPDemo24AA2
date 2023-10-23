-- -----------------------------------------------------
-- Schema dogtorpet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dogtorpet` DEFAULT CHARACTER SET utf8mb4;
USE `dogtorpet`;

-- -----------------------------------------------------
-- Table `dogtorpet`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dogtorpet`.`usuario` (
  `username`VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`username`),
  INDEX `IX_USUARIO_EMAIL` (`email` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `dogtorpet`.`tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dogtorpet`.`tipo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `IX_TIPO_ID` (`id` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `dogtorpet`.`mascota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dogtorpet`.`mascota` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `propietario` VARCHAR(20) NOT NULL,
  `fechaNac` DATE NOT NULL,
  `raza` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `genero` ENUM('Macho', 'Hembra') NOT NULL,
  `tipo` INT NOT NULL,
  `fotoUrl` VARCHAR(255),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_PROPIETARIO`
    FOREIGN KEY (`propietario`)
    REFERENCES `dogtorpet`.`usuario` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_TIPO`
    FOREIGN KEY (`tipo`)
    REFERENCES `dogtorpet`.`tipo` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  INDEX `IX_MASCOTA_ID` (`id` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `dogtorpet`.`vacuna`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dogtorpet`.`vacuna` (
  `id` CHAR(36) DEFAULT (uuid()),
  `fecha` DATETIME NOT NULL,
  `mascota` INT NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_VACUNA_MASCOTA`
    FOREIGN KEY (`mascota`)
    REFERENCES `dogtorpet`.`mascota` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  INDEX `IX_VACUNA_FECHA` (`fecha` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `dogtorpet`.`revision`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dogtorpet`.`revision` (
  `id` CHAR(36) DEFAULT(uuid()),
  `fecha` DATETIME NOT NULL,
  `mascota` INT NOT NULL,
  `peso` FLOAT NOT NULL,
  `comentarios` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_REVISION_MASCOTA`
    FOREIGN KEY (`mascota`)
    REFERENCES `dogtorpet`.`mascota` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  INDEX `IX_REVISION_FECHA` (`fecha` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Insert data `dogtorpet`.`usuario`
-- -----------------------------------------------------
INSERT INTO `dogtorpet`.`usuario`(`username`,`email`, `password`, `nombre`, `apellidos`) VALUES
  ('jromo', 'jromo@correo.net', SHA2('12345',256), 'José', 'Romo'),
  ('atellez', 'atellez@correo.net', SHA2('12345',256), 'Alejandro', 'Téllez'),
  ('cgiron', 'cgiron@correo.net', SHA2('12345',256), 'Carlos', 'Girón'),
  ('snieto', 'snieto@correo.net', SHA2('12345',256), 'Susana', 'Nieto'),
  ('jvera', 'jvera@correo.net', SHA2('12345',256), 'Jaime', 'Vera');

-- -----------------------------------------------------
-- Insert data `dogtorpet`.`tipo`
-- -----------------------------------------------------
INSERT INTO `dogtorpet`.`tipo` (`descripcion`) VALUES ('Perro'),('Gato');

-- -----------------------------------------------------
-- Insert data `dogtorpet`.`mascota`
-- -----------------------------------------------------
INSERT INTO `dogtorpet`.`mascota` (`nombre`,`propietario`,`fechaNac`,`raza`,`color`,`genero`,`tipo`,`fotoUrl`) VALUES
  ('Denver', 'atellez', '2014-11-18', 'Metizo/Labrador', 'Miel', 'Macho', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/denver.jpg'),
  ('Camy', 'atellez', '2014-11-18', 'Mestizo/Labrador', 'Miel/Blanco', 'Hembra', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/camy.jpg'),
  ('Kia', 'atellez', '2016-01-28', 'Mestizo/Galgo', 'Atigrado', 'Hembra', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/kia.jpg'),
  ('Hamilton', 'atellez', '2018-04-05', 'Corgi', 'Miel', 'Macho', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/hamilton.jpg'),
  ('Olivia', 'atellez', '2026-08-25', 'Corgi', 'Miel/Blanco', 'Hembra', 1, 'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/olivia.jpg'),
  ('Wera', 'jromo', '2012-09-16', 'Cocker Spagniel', 'Miel', 'Hembra', 1, 'https://misanimales.com/wp-content/uploads/2018/11/cocker-spaniel.jpg'),
  ('Maya', 'jromo', '2016-10-02', 'Border Collie', 'Negro/Blanco', 'Hembra', 1, 'https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_saber_si_un_border_collie_es_puro_44638_600_square.jpg'),
  ('Chicharito', 'snieto', '2018-12-19', 'Mestizo', 'Negro/Blanco', 'Macho', 1, 'https://i.pinimg.com/474x/26/4e/ca/264eca5cd5a8fae9ff8f6d77b42d4a68.jpg'),
  ('Aquiles', 'snieto', '2016-03-30', 'Pit Bull', 'Blanco/Beige', 'Macho', 1, 'https://i.pinimg.com/originals/0e/f6/7a/0ef67a2ae564032c7eb80ba870e7ba73.jpg'),
  ('Roco', 'cgiron', '2012-03-30', 'Barbet', 'Blanco/Beige', 'Macho', 1, 'http://3.bp.blogspot.com/-FPdBxjVjE3U/Uae3pg2Qh3I/AAAAAAAALVU/dUCWJRqh5fk/s1600/67.jpg'),
  ('Lucky', 'cgiron', '2010-03-30', 'Cocker Spagniel', 'Blanco/Beige', 'Macho', 1, 'https://images.pexels.com/photos/11161177/pexels-photo-11161177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  ('Molly', 'jvera', '2021-11-30', 'Pomerania', 'Beige', 'Hembra', 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pomeranian_Thank_You.jpg/250px-Pomeranian_Thank_You.jpg');