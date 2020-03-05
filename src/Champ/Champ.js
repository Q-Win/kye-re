import React from 'react';


import './Champ.css';

const champ = ( props ) => {
    return (
        <div className="Champ">
            <p >Im {props.name} </p>
        </div>
    )
};

export default champ;
