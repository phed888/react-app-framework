import React, { Component } from 'react';
import OrionHeader from './components/OrionHeader';
import './App.scss';
import TestPage from './components/TestPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrionHeader globalNav={['Tasks', 'History', 'Statistics', 'Team']} />
        <TestPage />
      </div>
    );
  }
}

export default App;
