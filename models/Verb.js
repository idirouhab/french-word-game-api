// models/Verb.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Verb = sequelize.define('Verb', {
    infinitive: DataTypes.STRING,
    english: DataTypes.STRING,
    spanish: DataTypes.STRING,
}, {
    tableName: 'Verbs',
    timestamps: false
});

module.exports = Verb;
