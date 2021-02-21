import React, { Component } from 'react';
import { Route } from "react-router-dom";


import ApiPostJson from './ApiPostJson';

class App extends Component {
  render () {
    return (
      <div >
        <Route exact path='/ApiPostJson' component={ApiPostJson} />
      </div>
    );
  }
}

export default App;