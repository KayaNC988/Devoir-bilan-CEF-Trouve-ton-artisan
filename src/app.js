const express = require('express');
const cors = require('cors');

const artisanRoutes = require('./routes/artisanRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const specialtyRoutes = require('./routes/specialtyRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/categories', categoryRoutes);
app.use('/specialties', specialtyRoutes);
app.use('/artisans', artisanRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Bienvenue sur l'API de Trouve ton artisan !"
    });
});

module.exports = app;