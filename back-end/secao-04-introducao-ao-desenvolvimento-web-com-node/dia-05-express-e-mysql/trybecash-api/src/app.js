const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes')

const app = express();

app.use(express.json());
app.use('/people', peopleRoutes);

module.exports = app;