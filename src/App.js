import React, { Component } from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Recipes />
      </div>
    );
  }
}

export default App;
