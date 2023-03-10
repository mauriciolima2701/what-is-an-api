const express = require('express');

const app = express();
const data = require('../data.json');

app.use(express.json());

// Buscando todos os clientes
app.get('/clients', (req, res) => {
    res.json(data)
})

// Buscando um cliente específico

app.get('/clients/:id', (req, res) => {
    const { id } = req.params;

    const client = data.find(cli => cli.id == id)

    if(!client) return res.status(204).json('Cliente não encontrado');
    
    res.json(client)
})

// Criar um client
app.post('/clients', (req, res) => {
    const { name, email } = req.body

    //salvar

    res.json({ name, email })
})


// Atualizar um client
app.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)

    if(!client) return res.status(204).json();

    const { name } = req.body

    client.name = name

    res.json(client);
})

// Deletar um client

app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)
    
    const clientsFiltered = data.filter(client => client.id != id)
    
    if(!client) return res.status(204).json();

    res.json(clientsFiltered);
})


// Porta do servidor
app.listen(8080, ()=> {
    console.log('Server running .... ');
})