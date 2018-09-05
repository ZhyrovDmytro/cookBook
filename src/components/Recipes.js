import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemActions';
import uuid from 'uuid';

class Header extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div>
        {this.props.item.items.map((item) => {
          return (
            <div key={item._id} id={item._id}>
              <h2>{item.dishName}</h2>
              <span><b>Prepare Time</b></span><p>{item.prepareTime}</p>
              <span><b>Cook Time</b></span><p>{item.cookTime}</p>
              <span><b>Total Time</b></span><p>{item.totalTime}</p>
              <span><b>Ingredients</b></span><p>{item.ingredient}</p>

              {item.ingredients.map((item) => {
                return (
                  <p key={uuid()}>{item}</p>
                )
              })}
              <span><b>Instructions</b></span><p>{item.instructions}</p>
              {item.img[0] && <img src={item.img[0].preview} />}
              {item.canvasUrl && <img src={item.canvasUrl} />}
              <button
                onClick={() => {
                  this.onDeleteClick(item._id)
                }}
              >
                delete
              </button>
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
