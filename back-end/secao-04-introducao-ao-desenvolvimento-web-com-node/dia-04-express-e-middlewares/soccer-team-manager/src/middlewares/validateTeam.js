const teams = require('../utils/teams');

const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
        next();
    } else {
        res.sendStatus(400);
      }
}

module.exports = validateTeam;