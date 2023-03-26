// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
    
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
   }
   
   fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <p>{joke}</p>
        <button onClick={ () => this.fetchJoke() }>Nova Piada</button>
      </div>
    );
  }
}

export default App;