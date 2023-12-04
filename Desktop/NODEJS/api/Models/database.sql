CREATE DATABASE cousbeldi_bd;

Create TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    ville VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    comple_adresse VARCHAR(255) NOT NULL,
    code_postal VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL unique ,

    email VARCHAR(255) NOT NULL unique,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;