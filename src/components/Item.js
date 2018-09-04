import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import ItemForm from './ItemForm';

class Item extends Component {
    state = {
        isModalOpen: false,
        name: ''
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onSubmit = (val) => {
        const {
            dishName,
            cookTime,
            ingredient,
            ingredients,
            instructions,
            prepareTime,
            totalTime
        } = val;

        const newItem = {
            dishName,
            cookTime,
            prepareTime,
            ingredient,
            ingredients,
            instructions,
            totalTime
        };

        this.props.addItem(newItem);

        // this.toggleModal();
    }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { addItem })(Item)