import React, { Component } from 'react';
import classes from './SkillTable.css';


class SkillTable extends Component {

  render (){

    return (
      <div>
        <p className={classes.description}>{this.props.description}</p>
        <table>
          <tr>
            <th> {this.props.letter} </th>
            {this.props.cooldowns.map((cd, index) =>{
              return(<th>{index+1}</th>)
            })}
          </tr>
          <tr>
            <th className={classes.RowHeader}>0%</th>
            {this.props.cooldowns.map(cd =>{
              return(<td className={classes.CoolDown}>{cd}</td>)
            })}
          </tr>
          <tr>
            <th className={classes.RowHeader}>10%</th>
            {this.props.cooldowns.map(cd =>{
              return(<td className={classes.CoolDown}>{(cd*.9).toFixed(1)}</td>)
            })}
          </tr>
          <tr>
            <th className={classes.RowHeader}>20%</th>
            {this.props.cooldowns.map(cd =>{
              return(<td className={classes.CoolDown}>{(cd*.8).toFixed(1)}</td>)
            })}
          </tr>
          <tr>
            <th className={classes.RowHeader}>30%</th>
            {this.props.cooldowns.map(cd =>{
              return(<td className={classes.CoolDown}>{(cd*.7).toFixed(1)}</td>)
            })}
          </tr>
          <tr>
            <th className={classes.RowHeader}>40%</th>
            {this.props.cooldowns.map(cd =>{
              return(<td className={classes.CoolDown}>{(cd*.6).toFixed(1)}</td>)
            })}
          </tr>
        </table>
      </div>
    )
  }
}
export default SkillTable;
