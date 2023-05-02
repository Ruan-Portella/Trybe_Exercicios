import { useState } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import useFetch from './hooks/useFetch';

function App() {

  const { loading, error, data, refresh } = useFetch('https://randomuser.me/api/');

  const [approvals, setApprovals] = useState(JSON.parse(localStorage.getItem('approvals')) || []);
  const [rejections, setRejections] = useState(JSON.parse(localStorage.getItem('rejections')) || []);


  const setStorageApprovals = (value) => {
    localStorage.setItem('approvals', JSON.stringify(value));
    setApprovals(value);
  };

  const setStorageRejections = (value) => {
    localStorage.setItem('rejections', JSON.stringify(value));
    setRejections(value);
  };

  const clearApprovals = () => {
    localStorage.removeItem('approvals');
    setApprovals([]);
  }

  const clearRejections = () => {
    localStorage.removeItem('rejections');
    setRejections([]);
  }

  if (error) return (
    <main>
      <h1>Um erro inesperado aconteceu</h1>
    </main>
  );

  return (
    <main>
      { loading && <h1>Carregando...</h1> }
      { data.length > 0 && (
        <section>
          <section>
            <h1>Pessoas Aleatórias</h1>
            <PersonCard person={ data[0] } />
            <button type='button' onClick={ refresh }>
              ⏩ Próxima pessoa candidata
            </button>
            <button type='button' onClick={ () => setStorageApprovals([...approvals, data[0]]) }>
              ✅ Aprovar
            </button>
            <button type='button' onClick={ () => setStorageRejections([...rejections, data[0]]) }>
              ❌ Reprovar
            </button>
          </section>
          <section>
            <h1>✅ Aprovadas</h1>
            <button type='button' onClick={ clearApprovals }>
              Limpar
            </button>
            { approvals.map((person) => (
              <PersonCard key={ person.id.name } person={ person } />
            )) }
          </section>
          <section>
            <h1>❌ Reprovadas</h1>
            <button type='button' onClick={ clearRejections }>
              Limpar
            </button>
            { rejections.map((person) => (
              <PersonCard key={ person.id.name } person={ person } />
            )) }
          </section>
        </section>
      ) }
    </main>
  );
}

export default App;
