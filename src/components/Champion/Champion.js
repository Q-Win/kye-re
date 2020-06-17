import React from 'react';
import SkillTable from './SkillTable/SkillTable'
import classes from './Champion.css';

const champion = (props) => (
  <div>
    <h1>{props.champData.name}</h1>
    <p>{props.champData.enemytips}</p>
    <div className={classes.Tables}>
      <SkillTable
        letter = "Q"
        cooldowns = {props.champData.cooldownQ}
        description = {props.champData.descriptionQ}/>
      <SkillTable
        letter = "W"
        cooldowns = {props.champData.cooldownW}
        description = {props.champData.descriptionW}/>
      <SkillTable
        letter = "E"
        cooldowns = {props.champData.cooldownE}
        description = {props.champData.descriptionE}/>
      <SkillTable
        letter = "R"
        cooldowns = {props.champData.cooldownR}
        description = {props.champData.descriptionR}/>
    </div>
  </div>
);

export default champion;
