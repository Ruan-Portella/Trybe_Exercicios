const EmployeeService = require('../services/employee.services');

const getAll = async (req, res) => {
    try {
        const employees = await EmployeeService.getAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAll };