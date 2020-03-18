import React from 'react';

import classes from './Champ.css';

const champ = ( props ) => {
    return (
        <div className={classes.Champ}>
            <p >Im {props.name} </p>
            <p >{props.enemytips} </p>
        </div>
    )
};

export default champ;