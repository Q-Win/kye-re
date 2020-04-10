import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
// import classes from './TeamBuilder.css'
import ChampSelector from '../../components/ChampSelector/ChampSelector'

class TeamBuilder extends Component {

  render (){

    return(
    <Aux>
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
       </form>
       <button onClick={this.props.submitClicked}>Submit</button>
    </Aux>

  )}
}

export default TeamBuilder;
