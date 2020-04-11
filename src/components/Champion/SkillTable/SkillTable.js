import React, { Component } from 'react';
import classes from './SkillTable.css';


class SkillTable extends Component {

  render (){
    let space =  'cat'
    let tableLength = this.props.cooldowns
    for (var i = 0; i < tableLength; i++) {i}

    return (
      <table>
        <tr>
          <th> </th>
          {this.props.cooldowns.map((cd, index) =>{
            return(<th>{index+1}</th>)
          })}
        </tr>
        <tr>
          <th>0%</th>
          {this.props.cooldowns.map(cd =>{
            return(<td>{cd}</td>)
          })}
        </tr>
        <tr>
          <th>10%</th>
          {this.props.cooldowns.map(cd =>{
            return(<td>{(cd*.9).toFixed(1)}</td>)
          })}
        </tr>
        <tr>
          <th>20%</th>
          {this.props.cooldowns.map(cd =>{
            return(<td>{(cd*.8).toFixed(1)}</td>)
          })}
        </tr>
        <tr>
          <th>30%</th>
          {this.props.cooldowns.map(cd =>{
            return(<td>{(cd*.7).toFixed(1)}</td>)
          })}
        </tr>
        <tr>
          <th>40%</th>
          {this.props.cooldowns.map(cd =>{
            return(<td>{(cd*.6).toFixed(1)}</td>)
          })}
        </tr>
      </table>
    )
  }
}
export default SkillTable;
