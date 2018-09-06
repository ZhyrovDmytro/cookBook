import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import ItemForm from './ItemForm';

class Item extends Component {
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

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { addItem })(Item)