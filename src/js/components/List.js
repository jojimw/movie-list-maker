import React from "react";
import { connect } from "react-redux";
import deleteButton from "../../img/delete-button.svg";
import { deleteMovie } from "./../actions/index";


const ConnectedList = props => {
    const handleClick = (id) => {
        const deletedMovie = props.movies.filter(el => el.id === id)
        props.deleteMovie(deletedMovie[0]);
    }

    return (
        <div>
            <ul className="list-group">
                {
                    props.movies.map(el => (
                        <div className="list-group-item" key={el.id}>
                            <li>
                                {el.title}
                            </li>
                            <img className="delete-button" src={deleteButton} alt="delete-button" onClick={() => handleClick(el.id)}></img>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteMovie: movie => dispatch(deleteMovie(movie))
    } 
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
