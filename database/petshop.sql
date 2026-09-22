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
                     ("Bolinha", "Chihuahua", "2 anos");

CREATE TABLE gato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    raca CHAR(20) NOT NULL UNIQUE,
    idade VARCHAR(20) UNIQUE
);

INSERT INTO 
    gato (nome,raca,idade) 
              VALUES ("Thor", "Siamês", "5 anos"),
                     ("Luna", "Persa", "3 anos"),
                     ("Simba", "Maine Coon", "2 anos");