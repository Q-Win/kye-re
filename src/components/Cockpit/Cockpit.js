import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';


  if (props.showChamps) {
    btnClass = classes.Red;
  }

  if (props.champs.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.champs.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }



  return (
    <div className={classes.Cockpit}>
      <h1>Hi, Im a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Champs
      </button>
  </div>
  );
};


export default cockpit;
