import React, { Component } from 'react';

class AddItems extends Component {

    state = {
        name: null,
        completed: null,
        id: null
    }

    addItems = (e) => {
        e.preventDefault();
        
        //check if the textbox is not empty before adding item
        var item_name = document.getElementById('name').value;

        if (item_name.length !== 0)
        {
            //send the data to the props
            this.props.addItems(this.state);
        }
        else
        {
            alert ("The input field must not be empty");
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
            status: false,
            id: Math.random()
        });
    }

    render () {
        
        return(
            <div className="container mt-5">
                <form className="col-md-8" onSubmit={this.addItems}>
                    <input onChange={this.handleChange} type="text" id="name" className="form-control"/>
                    <button className="btn btn-primary">Add item</button>
                </form>
            </div>
        );
    }

}

export default AddItems;