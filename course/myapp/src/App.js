import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {

    ninjas : [
      {name: 'Itachi', age: 23, clan: 'Uchiha', id: 1},
      {name: 'Naruto', age: 16, clan: 'Uzumaki', id: 2},
      {name: 'Neji', age: 18, clan: 'Hyuga', id:3},
    ],

    samurais: [
      {name: 'Mifune', age: 40, id: 1},
      {name: 'Oda', age: 45, id: 2}
    ]
  }

  addNinja = (ninja) => {

    let ninjas = [...this.state.ninjas, ninja]

    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {

    let ninjas = this.state.ninjas.filter(ninja => {

      return id !== ninja.id;
    });

    this.setState({
      ninjas: ninjas
    });

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>My first React App</h1>
          <p>
              I'm a beginner 
          </p>

          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} samurais={this.state.samurais} />

          <AddNinja addNinja={this.addNinja} />

        </header>
      </div>
    );
  }
}

export default App;
