const express = require('express');
const productRouter = require('./routers/product.router');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionaaaar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productRouter);
module.exports = app;
