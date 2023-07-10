const express = require('express');
const EmployeeController = require('./controllers/employee.controller');

const app = express();

app.get('/employees', EmployeeController.getAll)

module.exports = app;