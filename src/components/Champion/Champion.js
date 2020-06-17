import React from 'react';
import SkillTable from './SkillTable/SkillTable'

const champion = (props) => (
  <div>
    <h1>{props.champData.name}</h1>
    <p>{props.champData.enemytips}</p>
    <SkillTable
      cooldowns = {props.champData.cooldownQ}
      description = {props.champData.descriptionQ}/>
    <SkillTable
      cooldowns = {props.champData.cooldownW}
      description = {props.champData.descriptionW}/>
    <SkillTable
      cooldowns = {props.champData.cooldownE}
      description = {props.champData.descriptionE}/>
    <SkillTable
      cooldowns = {props.champData.cooldownR}
      description = {props.champData.descriptionR}/>
  </div>
);

export default champion;
