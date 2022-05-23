const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT || 5000;

app.use('/', (req, res) => res.send('<h1>Here we are<h1/>'))


app.listen(PORT, () => console.log(`Listening at port ${PORT}`));