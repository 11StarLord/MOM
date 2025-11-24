const	express = require('express');
const	router = express.Router();

router.get('/', (req, res) => {
	res.send('O meu primeiro servidor v.0.1!');
});

module.exports = router;
