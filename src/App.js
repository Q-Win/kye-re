import React, { Component } from 'react';

import classes from './App.css';
import Layout from  './hoc/Layout/Layout'
import axios from 'axios';

class App extends Component {

  //STATE
  state = { champs: []
  }

//FUNCTIONS (METHODS)

componentDidMount () {
  axios.get( 'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json' )
      .then( response => {
          const champs = Object.keys(response.data.data)
          this.setState({champs: champs});
      } );
    }



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
