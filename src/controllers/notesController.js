const	notes = [
	{ id: 1, title: 'Primeira nota', contetnt: 'Teste 1' },
	{ id: 2, title: 'Segunda nota', contetnt: 'Teste 2' }
];

function    getAllNotes(req, res){
    res.json(notes);
}

module.exports = {
    getAllNotes,
}