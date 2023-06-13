const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
    try {
        const data = await fs.readFile(moviesPath);
        return JSON.parse(data);
    } catch (error) {
        console.log(`Arquivo não encontrado: ${error}`);
    }
};

app.get('/movies/:id', async (req, res) => {
    try {
        const movies = await readFile();
        const movie = movies.find(({id}) => id === Number(req.params.id));
        if (movie) {
            res.status(200).json(movie);
        } else {
            throw new Error ('filme não encontrado')
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await readFile();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
});

app.post('/movies', async (req, res) => {
    try {
        const movies = await readFile();
        const {movie, price } = req.body;
        const newMovie = {
            id: movies[movies.length - 1].id + 1,
            movie,
            price,
        };
        const allMovies = JSON.stringify([...movies, newMovie]);
        await fs.writeFile(moviesPath, allMovies);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).send({message: error.message})
        
    }
});

app.put('/movies/:id', async (req, res) => {
    try {
        const movies = await readFile();
        const { id } = req.params;
        const { movie, price } = req.body;
        const index = movies.findIndex((element) => element.id === Number(id));
        if (index >= 0) {
            movies[index] = {id: Number(id), movie, price};
            const updateMovies = JSON.stringify(movies, null, 2);
            await fs.writeFile(moviesPath, updateMovies);
            res.status(200).json(movies[index]);
        } else {
            throw new Error('filme não encontrado!')
        }
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

app.delete('/movies/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const movies = await readFile();
        const filteredMovies = movies.filter((movies) => movies.id !== Number(id));
        const updateMovies = JSON.stringify(filteredMovies, null, 2);
        await fs.writeFile(moviesPath, updateMovies);
        res.status(204).end();
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


app.listen(3000, () => console.log('server running'))
