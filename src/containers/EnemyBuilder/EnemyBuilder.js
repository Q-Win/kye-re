import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Enemy from '../../components/Enemy/Enemy'


class EnemyBuilder extends Component {

  state ={
      champ1: {
        name: this.props.enemies.champ1,
        enemytips: "run",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ2: {
        name: this.props.enemies.champ2,
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ3: {
        name: this.props.enemies.champ3,
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ4: {
        name: this.props.enemies.champ4,
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      },
      champ5: {
        name: this.props.enemies.champ5,
        enemytips: "",
        cooldownQ: [],
        cooldownW: [],
        cooldownE: [],
        cooldownR: [],
      }
    }

  shouldComponentUpdate() {
    return true;
  }




  getDerivedStateFromProps(props, state) {
    console.log(props.enemies.champ5)
  }

  componentWillUpdate(){
    // this.setState({champ1: "this.props.enemies.champ1"})
  }

  lookUpChampionData (champ){
    const url = 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/'+champ+'.json'
    axios.get('http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/Amumu.json')
      .then( response => {
          const champData = response.data.data
          // this.setState({atestData: champData});
        });
  }


  render (){
    return(
      <Aux>
        <Enemy name={this.state.champ1.name} enemytips={this.state.champ1.enemytips} />
        <Enemy name={this.state.champ2.name} enemytips={this.state.champ2.enemytips} />
        <Enemy name={this.state.champ3.name} enemytips={this.state.champ3.enemytips} />
        <Enemy name={this.state.champ4.name} enemytips={this.state.champ4.enemytips} />
        <Enemy name={this.state.champ5.name} enemytips={this.state.champ5.enemytips} />
      </Aux>
      )}
}

export default EnemyBuilder;
