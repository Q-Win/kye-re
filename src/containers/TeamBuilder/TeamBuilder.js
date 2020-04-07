import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
// import classes from './TeamBuilder.css'
import ChampSelector from '../../components/ChampSelector/ChampSelector'

class TeamBuilder extends Component {



  test = (champ1) => {
    console.log(champ1)
  }

  render (){
    let champ = document.getElementById("champ1");
    return(
    <Aux>
      <form onSubmit={this.test("crap")}>
        <fieldset>
          <legend>Select Champions</legend>
             <ChampSelector champs={this.props.champs} id="champ1"/>
             <ChampSelector champs={this.props.champs} id="champ2"/>
             <ChampSelector champs={this.props.champs} id="champ3"/>
             <ChampSelector champs={this.props.champs} id="champ4"/>
             <ChampSelector champs={this.props.champs} id="champ5"/>
        </fieldset>
        <input type="submit" value="Enter" onClick={this.test.bind("np")}/>
       </form>
    </Aux>

  )}
}

export default TeamBuilder;
