import React from 'react';
import SkillTable from './SkillTable/SkillTable'

const champion = (props) => (
  <div>
    <h1>{props.champData.name}</h1>
    <p>{props.champData.enemytips}</p>
    <SkillTable cooldowns = {props.champData.cooldownQ} />
  </div>
);

export default champion;