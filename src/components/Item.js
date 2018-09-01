import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import uuid from 'uuid';

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

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggleModal();
    }

    render() {
        return (
            <div>
                <div
                    className="modal"
                    // isOpen={this.state.isModalOpen}
                    toggle={this.toggle}
                >
                    <h1>Add receipe</h1>
                    <form
                        onSubmit={this.onSubmit}
                    >
                        <input
                            name="name"
                            onChange={(event) => {
                                this.handleChange(event)
                            }}
                        />
                        <button
                            onClick={this.toggleModal}
                        >
                            Add item
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { addItem })(Item)