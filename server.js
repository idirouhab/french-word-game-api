require('dotenv').config();

const express = require('express');
const sequelize = require('./config/db'); // Adjust the path as necessary

// Routes
const verbsRouter = require('./routes/verbs'); // Adjust the path as necessary
const wordsRouter = require('./routes/words'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// Middleware
app.use(express.json()); // Parse JSON bodies

// Use the routes
app.use('/verb', verbsRouter);
app.use('/word', wordsRouter);

// Test database connection and then start the server
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
