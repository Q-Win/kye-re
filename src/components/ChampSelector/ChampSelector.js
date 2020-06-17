import React from 'react';

import classes from './ChampSelector.css';

const champSelector = (props) => {

  return(
    <div>
      <label>Select A Champion  </label>
      <select className={classes.ChampSelector} id={props.id} onChange={props.onChange}>
        {props.champs.map(champ =>(
          <option value={champ}>{champ}</option>
        ))}
      </select>
    </div>
  )
};

export default champSelector;
