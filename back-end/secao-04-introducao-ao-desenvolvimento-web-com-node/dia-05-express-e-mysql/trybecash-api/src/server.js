const app = require('./app');
const { findAll } = require('./db/peopleDB');
require('dotenv').config();

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});