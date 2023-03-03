import './App.css';
import React from 'react';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      numeroCliques: 0
    };
    this.handleButtonOne = this.handleButtonOne.bind(this);
  }

    getButtonColor(num) {
      return num % 2 === 0 ?'green' : 'red';
    }

    handleButtonOne() {
      this.setState((numeroCliques, _props) => ({
        numeroCliques: numeroCliques.numeroCliques + 1,
      }), () => {
        console.log(`Botão ${this.getButtonColor(this.state.numeroCliques)}`);
      })
    }

  render () {
  return (
    <div>
      <button type='button' style={{backgroundColor: this.getButtonColor(this.state.numeroCliques)}} onClick={this.handleButtonOne}>{ this.state.numeroCliques }</button>
    </div>
    
  );
  }
}

export default App;
