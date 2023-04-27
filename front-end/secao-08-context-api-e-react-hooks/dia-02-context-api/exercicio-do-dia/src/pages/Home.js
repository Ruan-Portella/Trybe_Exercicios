import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import FilmCard from '../components/FilmCard';

export default function Home() {
  const { films, favorites } = useContext(FilmsContext);

  return (
    <>
      <Header />
      <main>
        <h1>Films</h1>
        <section>
          {films.map((film) => (
            <FilmCard
              key={ film.id }
              film={ film }
              isFavorite={ favorites.some((favorite) => favorite.id === film.id) }
            />
          ))}
        </section>
      </main>
    </>
  );
}