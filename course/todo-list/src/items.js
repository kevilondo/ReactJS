import React from "react";

function Items(props) {

    const {items} = props;
    const {deleteItem} = props;
    const {itemCompleted} = props;

    const itemList = items.map(item => {
        return (
            <div className="mt-2" key={item.id}>
                <div className="row">
                    <div className="col-md-3">{item.name}</div>

                    <div className="col-md-3">
                        {item.completed ? "Completed" : "Not completed"}
                    </div>

                    <div className="col-md-3"><button onClick={() => {itemCompleted(item.id)}} className="btn btn-primary">
                        {item.completed ? "Not completed" : "Completed"}
                    </button></div>
                    <div className="col-md-3"><button onClick={() => {deleteItem(item.id)}} className="btn btn-danger">Delete</button></div>
                </div>
            </div>
        );
    });

    return (
        <div className="container mt-2 card card-default"> {itemList} </div>
    );
}

export default Items;