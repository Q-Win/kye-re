import React, { Component } from 'react';

import classes from './App.css';
import Layout from  './hoc/Layout/Layout'

class App extends Component {

  //STATE
  state = { champs: [
    "Annie","Amumu","Zed","Ashe"
  ]

  }

//FUNCTIONS (METHODS)



// BEGIN RENDERING
  render() {


    return (
      <div className={classes.App}>
        <h1> Know Your Enemy </h1>
        <Layout champs={this.state.champs}>

        </Layout>
      </div>



    );
  }
}

export default App;
