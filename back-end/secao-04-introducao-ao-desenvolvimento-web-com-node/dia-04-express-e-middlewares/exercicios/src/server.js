const app = require('./app');
const validateName = require('./middlewares/validateName')
const validatePrice = require('./middlewares/validatePrice')
const validateDescription = require('./middlewares/validateDescription')



app.post('/activities', validateName, validatePrice, validateDescription, (_req, res) => {
  res.status(201).json({message: 'Atividade cadastrada com sucesso!'})
})


app.listen(3001, () => console.log('server running on port 3001'));