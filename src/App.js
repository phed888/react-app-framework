import React, { Component } from 'react';
import OrionHeader from './components/OrionHeader';
import C3Container from './components/C3Container';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrionHeader globalNav={['Tasks', 'History', 'Statistics', 'Team']} />
        <C3Container />
      </div>
    );
  }
}

export default App;
