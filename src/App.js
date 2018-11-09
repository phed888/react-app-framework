import React, { Component } from 'react';
import OrionHeader from './components/OrionHeader';
import './App.scss';
import GettingStarted from './components/GettingStarted';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrionHeader globalNav={['Tasks', 'History', 'Statistics', 'Team']} />
        <GettingStarted />
      </div>
    );
  }
}

export default App;
