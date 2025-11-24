const	express = require('express');
const	app = express();

const homeRoute = require('./routes/home');

app.use('/', homeRoute);

app.listen(3000, () => {
	console.log('Servidor rodando em http://localhost:3000');
});
