const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

router.get('/', artisanController.getAllArtisans);
router.get('/top', artisanController.getTopArtisans);
router.get('/search', artisanController.searchArtisans);
router.get('/:id', artisanController.getArtisanById);
router.get('/category/:category', artisanController.getArtisansByCategory);

module.exports = router;