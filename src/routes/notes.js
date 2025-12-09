const	express = require('express');
const	router = express.Router();
const	notesController = require('src/controllers/noteController');

router.get('/', notesController.getAllNotes);

module.exports = router;
