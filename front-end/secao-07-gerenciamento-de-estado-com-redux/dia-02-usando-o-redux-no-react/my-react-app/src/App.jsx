import './App.css'
import React from 'react';
import { connect } from 'react-redux'
import { actionCreator } from './redux/actions'

class App extends React.Component {
  render() {
    const { countState, dispatch } = this.props
  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{ countState }</h2>
      <button onClick={() => dispatch(actionCreator('incrementar'))} >Incrementar</button>
      <button onClick={() => dispatch(actionCreator('Decrementar'))} >Decrementar</button>
    </div>
  )
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count
})


export default connect(mapStateToProps)(App);
