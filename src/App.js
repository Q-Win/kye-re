import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Champ from './Champ/Champ';

class App extends Component {

  //STATE
  state = {
    champs: [
      {name: 'Zed', enemytips: 'Zed receives bonus effect from Attack Damage items he purchases, so Armor is super effective against him. After Zed uses his Living Shadow, he is at his most vulnerable as his damage, slow, and mobility are both dependent upon it. Zeds Shadow Slash can only slow you if his shadow hits you with it.'},
      {  name: 'Lux', enemytips: 'Lux has powerful zone control abilities. Try to spread out and attack from different directions so she cannot lock down a specific area. When retreating with low health, be prepared to dodge Luxs Final Spark, a red targeting beam fires prior to the main beam, so try to move to the side if possible.'},
      { name: 'Ahri', enemytips: 'Ahris survivability is dramatically reduced when her Ultimate, Spirit Rush, is down. Stay behind minions to make Charm difficult to land, this will reduce Ahris damage potential significantly'}
    ],
    showChamps: false
  }

//FUNCTIONS (METHODS)
toggleChampsHandler = () => {
    const doesShow = this.state.showChamps;
    this.setState( { showChamps: !doesShow } );
  }

// BEGIN RENDERING
  render() {

    let champs = null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button className="Champ-button" onClick={this.toggleChampsHandler} > Toggle Champs</button>
        {champs}
      </div>

    );
  }
}

export default App;


// {this.state.champs.map( ( champ) => {
//   return <Champ name={champ.name}
//           enemytips={champ.enemytips}/>
// } )}
