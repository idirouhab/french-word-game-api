const express = require('express');
const router = express.Router();
const Word = require('../models/Word'); // Adjust the path as necessary
const sequelize = require('../config/db'); // Adjust the path as necessary

// Fetch a random word
router.get('/random', async (req, res) => {
    try {
        const randomWord = await Word.findOne({order: sequelize.random()});

        res.status(200).json(randomWord);
    } catch (error) {

        res.status(500).json({error: error.message});
    }
});

// Fetch a specific word by text
router.get('/:word', async (req, res) => {
    try {
        const word = await Word.findOne({where: {word: req.params.word}});
        if (word) {
            res.status(200).json(word);
        } else {
            res.status(404).json({message: 'Word not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Fetch a word's English translation by ID
router.get('/translation/:id', async (req, res) => {
    try {
        const word = await Word.findByPk(req.params.id);
        if (word) {
            res.status(200).json({english: word.english});
        } else {
            res.status(404).json({message: 'Word not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;
