import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
// import classes from './TeamBuilder.css'
import ChampSelector from '../../components/ChampSelector/ChampSelector'
import Champion from '../../components/Champion/Champion'
// import Modal from '../../components/UI/Modal/Modal'

class TeamBuilder extends Component {

  render (){


    const whatWeDisplay = () =>{
      if (this.props.showEnemy) { return(
        <div>
          <Champion champData = {this.props.enemies.champ1}/>
          <Champion champData = {this.props.enemies.champ2}/>
          <Champion champData = {this.props.enemies.champ3}/>
          <Champion champData = {this.props.enemies.champ4}/>
          <Champion champData = {this.props.enemies.champ5}/>
          <button onClick={this.props.submitClicked}>New Team</button>
        </div>
       )
     } else { return (
        <form >
          <fieldset>
            <legend>Select Champions</legend>
               <ChampSelector champs={this.props.champs}
                id="champ1"                                onChange={this.props.champSelectorChange}/>
               <ChampSelector champs={this.props.champs}
                id="champ2"
                onChange={this.props.champSelectorChange}/>
               <ChampSelector champs={this.props.champs}
                id="champ3"
                onChange={this.props.champSelectorChange}/>
               <ChampSelector champs={this.props.champs}
                id="champ4"
                onChange={this.props.champSelectorChange}/>
               <ChampSelector champs={this.props.champs}
                id="champ5"
                onChange={this.props.champSelectorChange}/>
          </fieldset>
          <button onClick={this.props.submitClicked}>Submit</button>
         </form>
       )
      }
    }

    return(
    <Aux>
      {whatWeDisplay()}

    </Aux>

  )}
}

export default TeamBuilder;
