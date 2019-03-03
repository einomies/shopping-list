import React, { Component } from 'react';
import SkyLight from 'react-skylight';
// Import RaisedButton
import RaisedButton from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

// This component will use the React Skylight modal form. Inside the React Skylight
// component in the render() method, we add two input fields (product and amount)
// and a button that calls the addItem function. To be able to call the addItem
// function that is in the App.js component, we have to pass it in a prop when
// rendering the AddItem component. Outside the React Skylight component, we will
// add a button that opens the modal form when it is pressed. This button is the
// only visible element when the component is rendered initially and it calls the
// React Skylight show() method to open the modal form. We also have to handle the
// change event of the input fields, so that we can access the values that have
// been typed. When the button inside the modal form is clicked, the addItem
// function is called and the modal form is closed using the React Skylight hide()
// method. The function creates an object from the input field values and calls
// the App.js component's addItem function, which finally add a new item to the
// state array and re-renders the user interface.

class AddItem extends Component {

    constructor(props) {
        super(props);
    }

    // Create new shopping item and calls addItem function.
    // Finally close the modal form
    addItem = () => {
        const item = {
            product: this.state.product,
            amount: this.state.amount
        };
        this.props.additem(item);
        this.addform.hide();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // Use RaisedButton in render() method
    render() {
        return (
            <div>
                <section>
                    <Button onClick={() => this.addform.show()} variant="raised" color="primary">Add Item</Button>
                </section>
                <SkyLight hideOnOverlayClicked ref={ref => this.addform = ref} title="Add item">
                    <input type="text" name="product" onChange={this.handleChange} placeholder="product" /><br />
                    <input type="text" name="amount" onChange={this.handleChange} placeholder="amount" /><br />
                    <Button onClick={this.addItem} variant="default">Add</Button>
                </SkyLight>
            </div>
        );
    }

}

export default AddItem;
