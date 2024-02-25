const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Word = sequelize.define('Word', {
    word: DataTypes.STRING,
    english: DataTypes.STRING,
    // Add other fields as necessary
}, {
    tableName: 'Words',
    timestamps: false
});

module.exports = Word;