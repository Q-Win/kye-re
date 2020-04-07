import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './TeamBuilder.css'
import ChampSelector from '../components/ChampSelector/ChampSelector'

class TeamBuilder extends Component {

  render (){
    return(
    <Aux>
      <form>
       <fieldset>
          <legend>Selecting elements</legend>
          <p>
             <label>Select list</label>
             <select id = "myList">
               <option value = "1">one</option>
               <option value = "2">two</option>
               <option value = "3">three</option>
               <option value = "4">four</option>
             </select>
          </p>
       </fieldset>
    </form>
    </Aux>

  )}
}

export default TeamBuilder;
