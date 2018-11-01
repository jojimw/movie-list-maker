import {
    ADD_MOVIE,
    DELETE_MOVIE
} from "../constants/action-types";

export const addMovie = movie => ({
    type: ADD_MOVIE,
    payload: movie
});

export const deleteMovie = movie => ({
    type: DELETE_MOVIE,
    payload: movie
});