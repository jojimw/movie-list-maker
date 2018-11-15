import {
    ADD_MOVIE,
    DELETE_MOVIE,
    TOGGLE_SAVING_LIST
} from "../constants/action-types";

export const addMovie = movie => ({
    type: ADD_MOVIE,
    payload: movie
});

export const deleteMovie = movie => ({
    type: DELETE_MOVIE,
    payload: movie
});

export const toggleSavingList = () => ({
    type: TOGGLE_SAVING_LIST,
    payload: ""
});