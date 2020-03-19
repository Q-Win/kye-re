import React from 'react';

import Champ from './Champ/Champ';

const champs = (props) =>
  props.champs.map((champ) => {
      return (<Champ
        name={props.name}
        enemytips={props.enemytips}
      />
    );
  });



export default champs;
