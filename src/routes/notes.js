const	express = require('express');
const	router = express.Router();

const	notes = [
	{ id: 1, title: 'Primeira nota', contetnt: 'Isso é só um teste' },
	{ id: 2, title: 'Segunda nota', contetnt: 'Mais um teste' }
];

router.get('/', (req, res) => {
	res.json(notes);
});

module.exports = router;
