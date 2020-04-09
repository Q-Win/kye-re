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
      <Modal show={this.props.showEnemy}>
        <EnemyBuilder/>
      </Modal>
      <TeamBuilder
        champs={this.props.champs}
        champSelectorChange={this.props.champSelectorChange}
        submitClicked={this.props.teamBuilderSubmit}
      />
    </Aux>

  )}
}

export default Layout;
