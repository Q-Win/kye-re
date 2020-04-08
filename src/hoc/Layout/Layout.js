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
      />
    </Aux>

  )}
}

export default Layout;
