const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const server = require('./graphql/index');
const PORT = process.env.SERVER_PORT || 500;

(async () => {
  await server.start();
  server.applyMiddleware({ app })
})();


app.listen(PORT, () => console.log(`Listening at port ${PORT}`));