CREATE TABLE cachorro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    raca CHAR(20) NOT NULL UNIQUE,
    idade VARCHAR(20) UNIQUE
);

INSERT INTO 
    cachorro (nome,raca,idade) 
              VALUES ("Aslam", "Poodle", "4 anos"),
                     ("Meg", "Labrador", "8 anos"),
                     ("Bolinha", "Chihuahua", "2 anos"),
                     ("Jose", "Golden Retriever", "6 anos"),
                     ("Meg", "Labrador", "8 anos"),
                     ("Bolinha", "Chihuahua", "2 anos");
                     ("Carlim", "Serra", "4 anos"),
                     ("Chico", "Labrador", "8 anos"),
                     ("Ze", "Chihuahua", "2 anos"),
                     ("Mara", "Poodle", "4 anos"),
                     ("Lara", "Persa", "10 anos"),
                     ("Bolao", "Chihuahua", "12 anos");

CREATE TABLE gato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    raca CHAR(20) NOT NULL UNIQUE,
    idade VARCHAR(20) UNIQUE
);

INSERT INTO 
    gato (nome,raca,idade) 
              VALUES ("Mingau", "Persa", "4 anos"),
                     ("Chica", "Siamês", "8 anos"),
                     ("Luna", "Maine Coon", "3 anos"),
                     ("Joelma", "Persa", "4 anos"),
                     ("Chimbinha", "Siamês", "1 anos"),
                     ("Joao", "Ruim", "2 anos"),
                     ("Lica", "Maine Coon", "10 anos"),
                     ("Gugu", "Mendigo", "5 anos"),
                     ("Luara", "Siamês", "9 anos"),
                     ("Nildo", "Brasileiro", "7 anos"),
                     ("Lindovaldo", "Arabe", "3 anos"),
                     ("Zangado", "Marciano", "4 anos");