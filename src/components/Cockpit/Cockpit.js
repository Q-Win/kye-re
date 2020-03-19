import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
  let btnClass = '';


  if (props.showChamps) {
    btnClass = classes.Red;
  }



  return (
    <div className={classes.Cockpit}>
      <h1>Hi, Im a React App</h1>
      <p>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Champs
      </button>
  </div>
  );
};


export default cockpit;
