const teams = require('../utils/teams');

const existingId = (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    if (team) {
      return next();
    } else {
      res.sendStatus(404);
    }
}

module.exports = existingId;