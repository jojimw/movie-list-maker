import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";  
import { addMovie } from "./../actions/index";

class ConnectedForm extends Component {
    // CONSTRUCTOR METHOD
    // ******************
    // constructor() {
    //     super();
    
    //     this.state = {
    //         title: ""
    //     }

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(event) {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const title = this.state.title;
    //     const id = uuidv1();
    //     this.props.addMovie({ title, id });
    //     this.setState({
    //         ...this.state,
    //         title: ""
    //     });
    // }

    // NON-CONSTRUCTOR METHOD
    // ******************
    state = {
        title: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.state.title;
        if (title) {
            const id = uuidv1();
            this.props.addMovie({ title, id });
            this.setState({
                ...this.state,
                title: ""
            });
        }
    }

    render() {
        const title = this.state.title;
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="input-div">
                    <label htmlFor="title" className="input-label">Title</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn-success">
                    ADD
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMovie: movie => dispatch(addMovie(movie))
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;