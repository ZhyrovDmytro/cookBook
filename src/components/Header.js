import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from './common/textFields/TexfField';
import Button from './common/buttons/Button';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemActions';
class Header extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    return (
      <header className="header">
        <TextField
          placeholder='find receipe'
        />
        <Button
          content="find"
        />
        <div>
          {this.props.item.items.map((item) => {
            return (
              <div key={item._id} id={item._id}>
                <p>{item.name}</p>
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
        {/* <img src={require('../pic/cookbook.jpg')} alt="Cook Book" /> */}
      </header>
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
