import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
// import classes from './TeamBuilder.css'
import ChampSelector from '../../components/ChampSelector/ChampSelector'
import Champion from '../../components/Champion/Champion'

class TeamBuilder extends Component {

  render (){
    let showEnemy = this.props.showEnemy

    const whatWeDisplay = () =>{
      if (this.props.showEnemy) { return(
        <div>
          <Champion champData = {this.props.champ1}/>
          <button onClick={this.props.submitClicked}>Submit</button>
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
