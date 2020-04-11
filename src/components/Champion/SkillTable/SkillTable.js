import React, { Component } from 'react';


class SkillTable extends Component {

  render (){
    let space =  'cat'
    let tableLength = this.props.cooldowns
    for (var i = 0; i < tableLength; i++) {i}

    return (
      <table>
        <tr>
          {this.props.cooldowns.map((cd, index) =>{
            return(<th>{index+1}</th>)
          })}
        </tr>
        <tr>
          {this.props.cooldowns.map(cd =>{
            return(<td>{cd}</td>)
          })}
        </tr>
        <tr>
          {this.props.cooldowns.map(cd =>{
            return(<td>{cd*.9.toFixed(1)}</td>)
          })}
        </tr>
        <tr>
          {this.props.cooldowns.map(cd =>{
            return(<td>{cd*.8.toFixed(1)}</td>)
          })}
        </tr>
        <tr>
          {this.props.cooldowns.map(cd =>{
            return(<td>{cd*.7.toFixed(1)}</td>)
          })}
        </tr>
        <tr>
          {this.props.cooldowns.map(cd =>{
            return(<td>{cd*.6.toFixed(1)}</td>)
          })}
        </tr>
      </table>
    )
  }
}
export default SkillTable;
