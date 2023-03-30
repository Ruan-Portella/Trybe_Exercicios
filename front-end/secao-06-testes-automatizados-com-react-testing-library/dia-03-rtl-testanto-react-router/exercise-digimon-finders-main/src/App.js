import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route path="/about" component={ About } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
