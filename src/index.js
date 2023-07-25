const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

// middleware do express para fazer o parse do body das requests
app.use(express.json());

// app.use() -> executa os middlewares do app ao receber uma request;
// middleware -> função executada ao receber uma request -> recebe os paramêtros request,
// response e next, para executar o proximo middleware.

// o express considera as rotas como um middleware, por isso usamos o app.use(routes);
// podemos ter um Router para cada rota/endpoint do app (ex.: products, contacts), por isso a
// necessidadede modularizar o arquivo de rotas.
app.use(routes);

// Error Handler -> middleware;
// no Express, um error handler é um middleware para tratamento de erros;
// para identificar um middleware como error handler, é preciso colocar
// 4 argumentos na assinatura da sua função -> error, request, response, next.
app.use((error, request, respose, next) => {
  console.log('### Error Handler');
  console.log(error);
  respose.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
