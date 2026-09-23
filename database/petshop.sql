
CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE pet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    raca VARCHAR(30) NOT NULL,
    idade VARCHAR(20),
    cliente_id INT NOT NULL,
    CONSTRAINT fk_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

INSERT INTO cliente (nome, telefone) VALUES 
    ("Carlos Silva", "(11) 98888-1111"),
    ("Ana Souza", "(21) 97777-2222"),
    ("Marcos Lima", "(31) 96666-3333"),
    ("Beatriz Costa", "(41) 95555-4444");


INSERT INTO pet (nome, raca, idade, cliente_id) VALUES 
    ("Aslam", "Poodle", "4 anos", 1),
    ("Meg", "Labrador", "8 anos", 1),
    ("Mingau", "Persa", "3 anos", 2),
    ("Chica", "Siamês", "5 anos", 2),
    ("Bolinha", "Chihuahua", "2 anos", 3),
    ("Luna", "Maine Coon", "1 ano", 4);