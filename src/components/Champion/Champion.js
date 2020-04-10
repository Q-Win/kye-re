import React from 'react';

const champion = (props) => (
  <div>
    <h1>{props.champData.name}</h1>
    <p>{props.champData.enemytips}</p>
  </div>
);

export default champion;
