import React, { Component } from 'react';

import classes from './App.css';
import Layout from  './hoc/Layout/Layout'
import axios from 'axios';

class App extends Component {

  //STATE
    state = {
      showEnemyTeam: false,
      champs: ["Aatrox","Amumu","Ashe"],
      selectedChamps: {
        champ1: "Aatrox",
        champ2: "Aatrox",
        champ3: "Aatrox",
        champ4: "Aatrox",
        champ5: "Aatrox"
      },
      champ1: {
        name: "",
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ2: {
        name: "",
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ3: {
        name: "",
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ4: {
        name: "",
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ5: {
        name: "",
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      }

    }


//FUNCTIONS (METHODS)



  champSelectorHandler (event) {
    const champId = event.target.id
    const champName = event.target.value
    let updatedChamps = {...this.state.selectedChamps}
    updatedChamps[champId] = champName
    this.setState({selectedChamps: updatedChamps});

    const url = 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/'+champName+'.json'

    axios.get(url)
      .then( response => {
          const enemyTip = response.data.data[champName].enemytips
          const cooldownQ = response.data.data[champName].spells[0].cooldown
          const cooldownE = response.data.data[champName].spells[1].cooldown
          const cooldownW = response.data.data[champName].spells[2].cooldown
          const cooldownR = response.data.data[champName].spells[3].cooldown


          let updatedSelectedChamp = {...this.state[champId]}

          updatedSelectedChamp.enemytips = enemyTip
          updatedSelectedChamp.name = champName
          updatedSelectedChamp.cooldownQ = cooldownQ
          updatedSelectedChamp.cooldownW = cooldownW
          updatedSelectedChamp.cooldownE = cooldownE
          updatedSelectedChamp.cooldownR = cooldownR

          this.setState({[champId]: updatedSelectedChamp});
        });

  }

  lookUpChampionData (champ){
    const url = 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/'+champ+'.json'
    axios.get(url)
      .then( response => {
          const champData = response.data.data
        });
  }


  submitTeam (){
    const doesShow = this.state.showEnemyTeam;
    this.setState({ showEnemyTeam: !doesShow })
  }

  componentDidMount () {
    axios.get( 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json' )
        .then( response => {
          let champs = Object.keys(response.data.data)
          this.setState({champs: champs});
        });
    }


// BEGIN RENDERING
  render() {



    return (
      <div className={classes.App}>
        <h1> Know Your Enemy </h1>
        <Layout
          champs={this.state.champs}
          champSelectorChange={this.champSelectorHandler.bind(this)}
          teamBuilderSubmit={this.submitTeam.bind(this)}
          showEnemy={this.state.showEnemyTeam}
          enemies={this.state.selectedChamps}
          champ1={this.state.champ1}
          champ2={this.state.champ2}
          champ3={this.state.champ3}
          champ4={this.state.champ4}
          champ5={this.state.champ5}
        >
        </Layout>
      </div>

    );
  }
}

export default App;
