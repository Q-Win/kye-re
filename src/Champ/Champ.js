import React from 'react';


import './Champ.css';

const champ = ( props ) => {
    return (
        <div className="Champ">
            <p >Im {props.name} </p>
            <p >{props.enemytips} </p>
        </div>
    )
};

export default champ;
