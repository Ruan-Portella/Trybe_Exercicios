import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/welcome" component={ Welcome }></Route>
       </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
