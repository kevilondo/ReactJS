import React, { Component } from 'react';

class Ninja extends Component {
    render (){

        const {ninjas} = this.props;

        const ninjasList = ninjas.map(ninja => {

            return (
                <div className="Ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Clan: {ninja.clan}</div>
                </div>
            );
        })

        return (
            <div className="Ninja-List">
                {ninjasList}
            </div>
        );
    }
}

export default Ninja;