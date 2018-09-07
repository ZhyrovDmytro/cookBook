import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import ItemForm from './ItemForm';

class Main extends Component {
    state = {
        isModalOpen: false
    }

    toggleModal = (evt) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onSubmit = (val) => {
        const canvas = document.querySelector('.canvas');
        const canvasUrl = canvas.toDataURL();

        const {
            dishName,
            cookTime,
            ingredient,
            ingredients,
            instructions,
            prepareTime,
            totalTime,
            img,
        } = val;

        const newItem = {
            dishName,
            cookTime,
            prepareTime,
            ingredient,
            ingredients,
            instructions,
            totalTime,
            img,
            canvasUrl
        };

        this.props.addItem(newItem);
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn--wide"
                    onClick={(event) => {this.toggleModal(event)}}
                >
                    Add receipe
                </button>
                <ItemForm
                    onSubmit={this.onSubmit}
                    className={this.state.isModalOpen && 'active'}
                    toggleModal={(event) => {this.toggleModal(event)}}
                />
            </div>
        )
    }
}

Main.propTypes = {
    addItem: PropTypes.func.isRequired,
    error: PropTypes.string,
    item: PropTypes.shape({
      error: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
  }

  Main.defaultProps = {
    error: '',
    items: []
  };

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { addItem })(Main)