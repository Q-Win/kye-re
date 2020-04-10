import React, { Component } from 'react';

import classes from './App.css';
import Layout from  './hoc/Layout/Layout'
import axios from 'axios';

class App extends Component {

  //STATE
    state = {
      showEnemyTeam: false,
      champs: [],
      selectedChamps: {
        champ1: "Aatrox",
        champ2: "Aatrox",
        champ3: "Aatrox",
        champ4: "Aatrox",
        champ5: "Aatrox"
      }
    }


//FUNCTIONS (METHODS)



  champSelectorHandler (event) {
    const champId = event.target.id
    const champName = event.target.value
    let updatedChamps = {...this.state.selectedChamps}
    updatedChamps[champId] = champName
    this.setState({selectedChamps: updatedChamps});
  }



  submitTeam (){
    const doesShow = this.state.showEnemyTeam;
    this.setState({ showEnemyTeam: !doesShow })
  }


// BEGIN RENDERING
  render() {

    axios.get( 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json' )
        .then( response => {
          let champs = Object.keys(response.data.data)
          this.setState({champs: champs});
        });

    return (
      <div className={classes.App}>
        <h1> Know Your Enemy </h1>
        <Layout
          champs={this.state.champs}
          champSelectorChange={this.champSelectorHandler.bind(this)}
          teamBuilderSubmit={this.submitTeam.bind(this)}
          showEnemy={this.state.showEnemyTeam}
          enemies={this.state.selectedChamps}
        >
        </Layout>
      </div>

    );
  }
}

export default App;
