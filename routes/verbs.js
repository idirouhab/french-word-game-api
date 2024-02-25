const express = require('express');
const router = express.Router();
const Verb = require('../models/Verb'); // Adjust the path as necessary
const sequelize = require('../config/db'); // Adjust the path as necessary

// Fetch a random verb
router.get('/random', async (req, res) => {
    try {
        const randomVerb = await Verb.findOne({order: sequelize.random()});
        res.status(200).json(randomVerb);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Fetch a specific verb by its infinitive
router.get('/:verb', async (req, res) => {
    try {
        const verb = await Verb.findOne({where: {infinitive: req.params.verb}});
        if (verb) {
            res.status(200).json(verb);
        } else {
            res.status(404).json({message: 'Verb not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Fetch a verb's Spanish translation by ID
router.get('/translation/:id', async (req, res) => {
    try {
        const verb = await Verb.findByPk(req.params.id);
        if (verb) {
            res.status(200).json({spanish: verb.spanish});
        } else {
            res.status(404).json({message: 'Verb not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;
