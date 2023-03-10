import './App.css';
import React from 'react'

class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => this.setState({ imageUrl: data.message, isLoading: false }))
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  };

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageURL', imageUrl)
    const dogBreed = imageUrl.split('/')[4];
    alert(dogBreed);
  }

  componentDidMount() {
    const localStorageUrl = localStorage.getItem('imageURL');
    if (localStorageUrl) {
      this.setState({ imageUrl: localStorageUrl, isLoading: false });
    } else {
      this.fetchDog();
    }
  };

  render() {

    const { imageUrl, isLoading } = this.state;

    if (isLoading) {
      return <h2>Loading...</h2>
    }

    return(
      <div>
      <h1>Doguinhos</h1>
      <button type='button' onClick={ this.fetchDog }>Novo doguinho!</button>
      <div>
        <img src={ imageUrl } alt='Doguinho aleatório' />
      </div>
      </div>    
    );
  }
}

export default App;
