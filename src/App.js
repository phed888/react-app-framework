import React, { Component } from 'react';
import ControlPlaneHeader from './components/ControlPlaneHeader';
import './App.scss';
import GettingStarted from './components/GettingStarted';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlPlaneHeader
          globalNav={['Tasks', 'History', 'Statistics', 'Team']}
        />
        <GettingStarted />
      </div>
    );
  }
}

export default App;
