import React, { Component } from 'react';

import classes from './App.css';
import Layout from  './hoc/Layout/Layout'

class App extends Component {

  //STATE
  state = {

  }

//FUNCTIONS (METHODS)



// BEGIN RENDERING
  render() {


    return (
      <div className={classes.App}>
        <h1> Know Your Enemy </h1>
        <Layout>

        </Layout>
      </div>



    );
  }
}

export default App;
