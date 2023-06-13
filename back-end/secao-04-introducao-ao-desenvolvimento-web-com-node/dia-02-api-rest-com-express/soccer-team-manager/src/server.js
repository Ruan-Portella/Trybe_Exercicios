const app = require('./app');
const express = require('express')

app.use(express.json());

const teams = [
    {
        id: 1,
        name: 'São Paulo',
        initials: 'SPF',
    },
    {
        id: 2,
        name: 'Flamengo',
        initials: 'FRP',
    },
];



app.get('/teams', (req, res) => {
    res.status(200).json({teams})
});

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam)
    res.status(201).json({team: teams});
});

app.put('/teams/:id', (req, res) => {
    const {id} = req.params;
    const {name, initials} = req.body;

    const updateTeam = teams.find((team) => team.id === Number(id));

    if(!updateTeam) {
        res.status(404).json({message: 'Team not Found'});
    }

    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(201).json({updateTeam});
})

app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);
    res.status(204).end();
})

app.listen(3001, () => console.log('server runing at ruan'));