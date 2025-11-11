USE api_crud;


CREATE TABLE pet_shop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeDono VARCHAR(100) NOT NULL,
    nomePet VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

SELECT * FROM pet_shop;