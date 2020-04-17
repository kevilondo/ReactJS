import React, { Component } from 'react';
import Items from './items';
import AddItems from './addItems';

class App extends Component {
  state = {

    items: []

  }

  addItems = (item) => {

    let items = [...this.state.items, item];

    this.setState({
      items: items
    });

    console.log(item);
  }

  deleteItem = (id) => {

    let items = this.state.items.filter(item => {
      return id !== item.id
    });

    this.setState({
      items: items
    });
  }

  itemCompleted = (id) => {

      this.setState({
        items: this.state.items.map (item => {
          if (item.id === id)
          {
            return {
              name: item.name,
              completed: !item.completed,
              id: item.id
            };
          }
          else
          {
            return item;
          }
        })
      })
  }

  render() {

    return (
      <div className="App container">
        <h1 className="text-primary">To-do list app (by Kev) </h1>
        <AddItems addItems={this.addItems} />
        <Items items={this.state.items} deleteItem={this.deleteItem} itemCompleted={this.itemCompleted} />
      </div>
    );
  }

}

export default App;
