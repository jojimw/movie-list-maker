import React from "react";

import List from "./List";
import Form from "./Form";

const AddNew = () => (
    <div>
        <div className="row">
            <div className="col">
                <h2>Movies</h2>
                <List />
            </div>
            <div className="col">
                <h2>Add a new movie</h2>
                <Form />
            </div>
        </div>
    </div>
);

export default AddNew;