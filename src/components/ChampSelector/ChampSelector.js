import React from 'react';

import classes from './ChampSelector.css';

const champSelector = (props) => (
  <div>
    <label>Select list</label>
    <select id = "myList">
      <option value = {props.champs[0]}>{props.champs[0]}</option>
      <option value = {props.champs[0]}>{props.champs[0]}</option>
      <option value = {props.champs[0]}>{props.champs[0]}</option>

    </select>
  </div>

);

export default champSelector;
