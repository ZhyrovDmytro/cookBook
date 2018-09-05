import React, { Component } from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Item />
        <Recipes />
      </div>
    );
  }
}

export default App;
