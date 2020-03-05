import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Champ from './Champ/Champ';

class App extends Component {

  state = {
    champs: [
      { id: 'asfa1', name: 'Amumu'},
      { id: 'vasdf1', name: 'Manu'},
      { id: 'asdf11', name: 'Stephanie'}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.state.champs.map( ( champ, index ) => {
          return <Champ name={champ.name} />
        } )}
        </p>
      </div>




    );
  }
}

export default App;
