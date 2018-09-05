import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import ItemForm from './ItemForm';

class Item extends Component {
    state = {
        isModalOpen: false
    }

    toggleModal = () => {
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
        // this.toggleModal();
    }

    render() {
        return (
            <div
                className="modal"
                // isOpen={this.state.isModalOpen}
                // toggle={this.toggle}
            >
                <h1>Add receipe</h1>
                <ItemForm
                    onSubmit={this.onSubmit}
                />
                {/* <button
                    onClick={this.toggleModal}
                >
                    Add item
                </button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { addItem })(Item)