import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './TeamBuilder.css'
import ChampSelector from '../../components/ChampSelector/ChampSelector'

class TeamBuilder extends Component {

  render (){
    return(
    <Aux>
      <form>
       <fieldset>
          <legend>Selecting elements</legend>
          <p>
             <ChampSelector champs={this.props.champs}/>
          </p>
       </fieldset>
    </form>
    </Aux>

  )}
}

export default TeamBuilder;
