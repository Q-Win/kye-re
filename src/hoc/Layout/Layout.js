import React, { Component } from 'react';

import Aux from '../Aux/Aux';
// import classes from './Layout.css'
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder'
import Modal from '../../components/UI/Modal/Modal'
import EnemyBuilder from '../../containers/EnemyBuilder/EnemyBuilder'

class Layout extends Component {


  render (){
    return(
    <Aux>

      <TeamBuilder
        champs={this.props.champs}
        champSelectorChange={this.props.champSelectorChange}
        submitClicked={this.props.teamBuilderSubmit}
        showEnemy={this.props.showEnemy}
        champ1={this.props.champ1}
        champ2={this.props.champ2}
        champ3={this.props.champ3}
        champ4={this.props.champ4}
        champ5={this.props.champ5}
      />
    </Aux>

  )}
}

export default Layout;
