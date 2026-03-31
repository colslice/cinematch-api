const express = require('express');
const router = express.Router();
const { addService, removeService, addGenre, removeGenre } = require('../controllers/userController');

router.post('/:id/services', addService);
router.delete('/:id/services', removeService);
router.post('/:id/genres', addGenre);
router.delete('/:id/genres', removeGenre);

module.exports = router;