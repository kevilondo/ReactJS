import React from 'react';

function Ninjas(props) {
    const {ninjas} = props;
    const {samurais} = props;
    const {deleteNinja} = props;

    const ninjasList = ninjas.map(ninja => {
        if (ninja.age < 20)
        {  
            return (
                <div className="Ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Clan: {ninja.clan}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}> Delete Ninja </button>
                </div>
            );
        }
        else
        {
            return null;
        }
    });

    const samuraisList = samurais.map(samurai => {

        return (
            <div className="Samurai" key={samurai.id}>
                <div>Name: {samurai.name}</div>
                <div>Age: {samurai.age}</div>
            </div>
        )
    })

    return (
        <div className="Container">
            <div className="Ninja-List">
                {ninjasList}
            </div>
            <div className="Ninja-List">
                {samuraisList}
            </div>
        </div>
    );
    
}

export default Ninjas;