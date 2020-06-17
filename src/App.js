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
      },

      enemies: {
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
    }


//FUNCTIONS (METHODS)



  champSelectorHandler (event) {
    const champId = event.target.id
    const champName = event.target.value
    const url = 'https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/'+champName+'.json'

    axios.get(url)
      .then( response => {
          const enemyTip = response.data.data[champName].enemytips
          const cooldownQ = response.data.data[champName].spells[0].cooldown
          const descriptionQ = response.data.data[champName].spells[0].description
          const cooldownW = response.data.data[champName].spells[1].cooldown
          const descriptionW = response.data.data[champName].spells[1].description
          const cooldownE = response.data.data[champName].spells[2].cooldown
          const descriptionE = response.data.data[champName].spells[2].description
          const cooldownR = response.data.data[champName].spells[3].cooldown
          const descriptionR = response.data.data[champName].spells[3].description


          let updatedSelectedChamp = {...this.state.enemies}

          updatedSelectedChamp[champId].enemytips = enemyTip
          updatedSelectedChamp[champId].name = champName
          updatedSelectedChamp[champId].cooldownQ = cooldownQ
          updatedSelectedChamp[champId].descriptionQ = descriptionQ
          updatedSelectedChamp[champId].cooldownW = cooldownW
          updatedSelectedChamp[champId].descriptionW = descriptionW
          updatedSelectedChamp[champId].cooldownE = cooldownE
          updatedSelectedChamp[champId].descriptionE = descriptionE
          updatedSelectedChamp[champId].cooldownR = cooldownR
          updatedSelectedChamp[champId].descriptionR = descriptionR

          this.setState({enemies: updatedSelectedChamp});
        });

  }

  submitTeam (){
    const doesShow = this.state.showEnemyTeam;
    this.setState({ showEnemyTeam: !doesShow })
  }

  componentDidMount () {
    axios.get( 'https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json' )
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
          enemies={this.state.enemies}
        >
        </Layout>
      </div>

    );
  }
}

export default App;
