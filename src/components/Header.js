import React, { Component } from 'react';
import Button from './common/buttons/Button';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <img
          className="header__img"
          src={require('../pic/cookbook.jpg')}
          alt="Cook Book"
        />
        <div className="header__inputGroup">
            <input
                placeholder='find receipe'
                className="header__input input__field"
            />
            <Button
                className="btn header__btn"
                content="FIND"
            />
        </div>
        <button
          className="header__scroll"
        >
          down
        </button>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps)(Header);
