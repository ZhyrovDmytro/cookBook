import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={require('../pic/cookbook.jpg')} alt="Cook Book" />
      </header>
    );
  }
}

export default Header;
