import React from 'react';

import Champ from './Champ/Champ';

const champs = (props) =>
  props.champs.map((champ) => {
      return (<Champ
        name={champ.name}
        enemytips={champ.enemytips}
      />
    );
  });



export default champs;
