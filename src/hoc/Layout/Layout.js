import React, { Component } from 'react';

import Aux from '../Aux/Aux';
// import classes from './Layout.css'
import TeamBuilder from '../../containers/TeamBuilder/TeamBuilder'



class Layout extends Component {


  render (){
    return(
    <Aux>

      <TeamBuilder
        champs={this.props.champs}
        champSelectorChange={this.props.champSelectorChange}
        submitClicked={this.props.teamBuilderSubmit}
        showEnemy={this.props.showEnemy}
        enemies={this.props.enemies}
      />
    </Aux>

  )}
}

export default Layout;
