#!/bin/bash

# Criar diretório da API
mkdir minha-api
cd minha-api

# Inicializar o projeto npm
npm init -y

# Instalar as dependências
npm install -E express nodemon sequelize mysql
npm install -D -E sequelize-cli

# Criar arquivo .sequelizerc
echo "const path = require('path');

module.exports = {
    'config': path.resolve('src', 'config', 'config.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations')
};" > .sequelizerc

# Criar diretório src e entrar nele
mkdir src
cd src

# Inicializar sequelize
npx sequelize-cli init

# Criar pastas controllers e services
mkdir controllers services

# Criar arquivo app.js
echo "const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;" > app.js

# Criar arquivo server.js
echo "const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Ouvindo a porta ' + PORT);
});" > server.js

echo "Script concluído com sucesso!"
