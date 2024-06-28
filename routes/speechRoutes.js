const express = require('express');
const multer = require('multer');
const { createSpeech, getSpeeches, updateSpeech, deleteSpeech,getSpeechById } = require('../controllers/speechController');
const router = express.Router();

const upload = multer();

router.post('/', upload.single('file'), createSpeech);
router.get('/', getSpeeches);
router.put('/:id',upload.array(),updateSpeech);
router.delete('/:id', deleteSpeech);
router.get('/:id', getSpeechById);
module.exports = router;
