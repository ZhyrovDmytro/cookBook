import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Arrow from '../pic/arrow.svg';
class Header extends Component {

  scroll = () => {
    const header = document.querySelector('.header');
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': header.offsetHeight
    });
  }

  filterItems = (evt) => {
    const items = document.querySelectorAll('.receipe__item');
    items.forEach(item => {
      const dishName = item.querySelector('h2').innerText.toUpperCase();
      const searchInputValue = evt.target.value.toUpperCase();
      const searchMatched = dishName.includes(searchInputValue);

        if (dishName) {
            if (searchMatched) {
              if (item.classList.contains('disable')) {
                item.classList.remove('disable')
              }
                dishName;
            } else {
                item.classList.add('disable');
            }
        }
    });
  }

  render() {
    return (
      <header className="header">
        <img
          alt="picture"
          className="header__img"
          src={require('../pic/cookbook.jpg')}
          alt="Cook Book"
        />
        <div className="header__inputGroup">
            <input
                placeholder='find receipe'
                className="header__input input__field"
                onChange={(event) => {this.filterItems(event)}}
            />
        </div>
        <button
          className="header__scroll"
          onClick={this.scroll}
        >
        <span>
          <img src={Arrow} className="header__arrow"  alt="picture"/>
        </span>
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: PropTypes.shape({
    error: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired,
  }).isRequired,
}

Header.defaultProps = {
  error: '',
  items: []
};

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps)(Header);
