import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
// import classes from './TeamBuilder.css'
import ChampSelector from '../../components/ChampSelector/ChampSelector'

class TeamBuilder extends Component {

  state = {
    champ1: ""
  }


  test = (e) => {
    console.log(e.target.id)

  }

  render (){

    return(
    <Aux>
      <form onSubmit={this.test}>
        <fieldset>
          <legend>Select Champions</legend>
             <ChampSelector champs={this.props.champs} id="champ1" onChange={this.props.champSelectorChange}/>
             <ChampSelector champs={this.props.champs} id="champ2"/>
             <ChampSelector champs={this.props.champs} id="champ3"/>
             <ChampSelector champs={this.props.champs} id="champ4"/>
             <ChampSelector champs={this.props.champs} id="champ5"/>
        </fieldset>
        <input type="submit" value="Enter" />
       </form>
    </Aux>

  )}
}

export default TeamBuilder;
