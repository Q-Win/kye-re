import React, { Component } from 'react';

import classes from './App.css';
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
    let btnClass = '';

    if ( this.state.showChamps ) {
      champs = (
        <div>
          {this.state.champs.map( ( champ) => {
            return <Champ name={champ.name}
                    enemytips={champ.enemytips}/>
          } )}
        </div>
      );
      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <header className="App-header">
          <h1 className="App-title">Know Your Enemy</h1>
        </header>
        <button className={btnClass} alt={this.state.showChamps} onClick={this.toggleChampsHandler}>
          Toggle Champs
        </button>
        {champs}
      </div>

    );
  }
}

export default App;
