/************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de mensagens
 * Autor: Bianca Leão
 * Data: 17/03/2023
 * Versão: 1.0
 ************************************************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// cria um objeto com as caracteristicas do express

const app = express();

app.use((request, response, next) => {
    // API Pública - fica disponivel para qualquer tipo de aplicação (usa *)
    // API Privada - fica disponivel somente para o servidor disponivel (usa o IP do servidor)
    response.header('Access-Control-Allow-Origin', '*')

    // Permite quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')

    //envia para o cors as regras de permissões
    app.use(cors())

    next();
})

// EndPoints
     // async -> estabelece um status de aguarde, assim que eu processar te devolvo os dados
        // Obs: se não usar o async, a requisição é perdida, pois front acha que a API está fora do ar

   // EndPoint para listar contatos do user
   app.get('/contatos', cors(), async function(request,response,next){
    const contatos = require('./modulo/contatos.js')
    let cidades = contatos.getUserContacts()
    response.status(200);
    response.json(cidades)
})

app.listen(8080, function(){
    console.log('servidor aguardando requisições na porta')
})