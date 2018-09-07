import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemActions';
import uuid from 'uuid';
import Spinner from '../components/common/Spinner';

class Header extends Component {

  state = {
    ingridients: false
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  toggleIngridients = evt => {
    const item = evt.currentTarget;
    const instructions = evt.currentTarget.querySelector('.receipe__ingridients');
    const content = evt.currentTarget.querySelector('.receipe__content');
    if(!evt.target.classList.contains('btn--close')) {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
        instructions.classList.remove('active')
        content.classList.remove('active')
      } else {
        item.classList.add('active')
        instructions.classList.add('active')
        content.classList.add('active')
      }
    }
  }

  render() {
    const { items, error } = this.props.item;
    const { loading } = this.props.item;
    const spinner = (
      loading && !error && <Spinner />
    );
    const errorMessage = !!error && <h2>{error}</h2>;


    return (
      <div className="receipe">
        {spinner}
        {errorMessage}
         {(items.length  < 1 && !loading) && <h2>No recipes.</h2>}
        {items.map((item) => {
          return (
              <div
                className="receipe__item"
                key={item._id}
                id={item._id}
                onClick={(event) => {this.toggleIngridients(event)}}
              >
              <div className="receipe__content">
                  <h2>{item.dishName}</h2>
                  <div className="receipe__preview">
                    <table className="receipe__table">
                      <tbody>
                        <tr className="receipe__row">
                          <td className="receipe__cell">
                            <p><b>Prepare Time</b></p>
                          </td>
                          <td>
                            <p><b>Cook Time</b></p>
                          </td>
                          <td>
                            <p><b>Total Time</b></p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>{item.prepareTime}h</p>
                          </td>
                          <td>
                          <p>{item.cookTime}h</p>
                          </td>
                          <td>
                            <p>{item.totalTime}h</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="receipe__canvas">
                      {item.canvasUrl && <img src={item.canvasUrl}  alt="picture" />}
                    </div>
                  </div>
                  <div className="receipe__ingridients">
                    {item.img[0] && <img src={item.img[0].preview} className="receipe__img" alt="picture"/>}
                    <span><b>Ingredients</b></span><p>{item.ingredient}</p>
                    {item.ingredients.map((item) => {
                      return (
                        <p key={uuid()}>{item}</p>
                      )
                    })}
                    <span><b>Instructions</b></span><p>{item.instructions}</p>
                  </div>
                  <button
                    onClick={() => {
                      this.onDeleteClick(item._id)
                    }}
                    className="btn btn--close"
                  >
                    Delete
                  </button>
                </div>
              </div>
          )
        })}
      </div>
    );
  }
}

Header.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(Header);
