const express = require('express');
const estoque = require('./estoque');
const app = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>'
    html += '<h3>Rotas disponiveis</h3>'
    html += '<p>/adicionar/:id/:nome/:qtd</p>'
    html += '<p>/listar</p>'
    html += '<p>/remover/:id</p>'
    html += '<p>/editar/:id/:qtd</p>'
    res.send(html);
});

// /adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    let item = {
        id: Number(req.params.id), 
        nome: req.params.nome, 
        qtd: Number(req.params.qtd) 
    };
    res.send(estoque.adicionar(item));
});

// /listar
app.get('/listar', (req, res)=>{
    res.send(estoque.listar());
});

// /editar/:id/:qtd
app.get('/editar/:id/:qtd', (req, res)=>{
    let id = Number(req.params.id);
    let qtd = Number(req.params.qtd);
    res.send(estoque.editar(id, qtd));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});
