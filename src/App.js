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
        champ1: null,
        champ2: null,
        champ3: null,
        champ4: null,
        champ5: null
      }
    }


//FUNCTIONS (METHODS)

  componentDidMount () {
    axios.get( 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json' )
        .then( response => {
          const champs = Object.keys(response.data.data)
          this.setState({champs: champs});
        });

      }

  champSelectorHandler (event) {
    const champId = event.target.id
    const champName = event.target.value
    let updatedChamps = {...this.state.selectedChamps}
    updatedChamps[champId] = champName
    this.setState({selectedChamps: updatedChamps});

    axios.get('http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/Amumu.json')
      .then( response => {
          const champData = response.data.data
          this.setState({atestData: champData});
        });
  }

  lookUpChampionData (champ){
    axios.get('http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/Amumu.json')
      .then( response => {
          const champData = response.data.data
          this.setState({atestData: champData});
        });
  }

  submitTeam (){
    const doesShow = this.state.showEnemyTeam;
    this.setState({ showEnemyTeam: !doesShow })
  }


// BEGIN RENDERING
  render() {


    return (
      <div className={classes.App}>
        <h1> Know Your Enemy </h1>
        <Layout
          champs={this.state.champs}
          champSelectorChange={this.champSelectorHandler.bind(this)}
          teamBuilderSubmit={this.submitTeam.bind(this)}>
          showEnemy={this.showEnemyTeam}
        </Layout>
      </div>

    );
  }
}

export default App;
