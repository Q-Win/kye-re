import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Enemy from '../../components/Enemy/Enemy'


class EnemyBuilder extends Component {

  state ={
    champ1: {
      name: "Cat",
      enemytips: "run",
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


  render (){
    return(
      <Aux>
        <Enemy name={this.state.champ1.name} enemytips={this.state.champ1.enemytips} />
        <Enemy name={this.state.champ1.name} enemytips={this.state.champ1.enemytips} />
        <Enemy name={this.state.champ1.name} enemytips={this.state.champ1.enemytips} />
        <Enemy name={this.state.champ1.name} enemytips={this.state.champ1.enemytips} />
        <Enemy name={this.state.champ1.name} enemytips={this.state.champ1.enemytips} />
      </Aux>
      )}
}

export default EnemyBuilder;
