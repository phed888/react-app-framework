import React, { Component } from 'react';
import OrionHeader from './components/OrionHeader/OrionHeader.js';
import C3Container from './components/C3/C3Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrionHeader
          globalNav={['Tasks', 'History', 'Statistics', 'Team', 'Bloop']}
        />
        <C3Container />
      </div>
    );
  }
}

export default App;
