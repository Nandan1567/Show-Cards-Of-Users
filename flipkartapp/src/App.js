import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './screens/users';

class App extends Component {
  render() {
    return (
      <div className="App">

       <User />
      </div>
    );
  }
}

export default App;
