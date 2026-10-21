const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota 1: Home
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Home - Projeto Nuvem</title>
      </head>
      <body>
        <h1>Segundo Projeto - Desenvolvimento de Software em Nuvem</h1>
        <p>Professor: Américo Sampaio</p>
        <nav>
          <a href="/sobre">Sobre o Projeto</a> | 
          <a href="/integrantes">Integrantes</a>
        </nav>
      </body>
    </html>
  `);
});

// Rota 2: Sobre
app.get('/sobre', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Sobre - Projeto Nuvem</title>
      </head>
      <body>
        <h1>Sobre o Projeto</h1>
        <p>Aplicação Web baseada no modelo request-response desenvolvida em Node.js com Express.</p>
        <p>Provedores de Nuvem utilizados: AWS e Railway.</p>
        <a href="/">Voltar para Home</a>
      </body>
    </html>
  `);
});

// Rota 3: Integrantes
app.get('/integrantes', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Integrantes - Projeto Nuvem</title>
      </head>
      <body>
        <h1>Integrantes da Equipe</h1>
        <ul>
          <li>Manoel Carvalho</li>
        </ul>
        <a href="/">Voltar para Home</a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});