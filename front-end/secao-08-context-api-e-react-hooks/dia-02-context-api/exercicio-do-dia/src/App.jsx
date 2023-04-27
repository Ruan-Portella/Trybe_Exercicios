import { useEffect } from 'react';
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'
import FilmsContext from './context/FilmContext';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations').then((result) => result.json())
    .then((data) => setFilms(data))
    .catch((error) => console.log(error));
  }, [])

  function toggleFavorites(item) {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === item.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorites,
  }

  return (
    <FilmsContext.Provider value={context}>
    <Switch>
        <Route path='/' component={Home}></Route>
        <Route path='/favorites' component={Favorites}></Route>
    </Switch>
    </FilmsContext.Provider>
  )
}

export default App
