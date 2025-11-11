const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar cliente
app.post('/clientePetShop', (req, res) => {
    const { id, nomeDono, nomePet, endereco, telefone } = req.body;

    const codigoDoMySQL = 'INSERT INTO pet_shop (id, nomeDono, nomePet, endereco, telefone) VALUES (?, ?, ?, ?, ?)';

    acessaBancoNoServidor.query(codigoDoMySQL, [id, nomeDono, nomePet, endereco, telefone], (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao cadastrar' });
        }
        res.json({ message: 'Cliente cadastrado e Pet cadastrado!' });
    });
});

// Listar clientes
app.get('/clientePetShop', (req, res) => {
    const codigoDoMySQL = 'SELECT nomeDono, nomePet, endereco, telefone FROM pet_shop';

    acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao buscar' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
