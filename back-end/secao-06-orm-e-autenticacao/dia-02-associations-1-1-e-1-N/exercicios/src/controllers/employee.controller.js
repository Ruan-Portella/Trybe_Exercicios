const EmployeeService = require('../services/employee.services');

const getAll = async (req, res) => {
    try {
        const employees = await EmployeeService.getAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await EmployeeService.getById(id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAll, getById };