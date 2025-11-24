const	express = require('express');
const	app = express();

const   homeRoute = require('./routes/home');
const   notesRoute = require('./routes/notes');

app.use('/', homeRoute);
app.use('/notes', notesRoute);

app.listen(3000, () => {
	console.log('Servidor rodando em http://localhost:3000');
});
