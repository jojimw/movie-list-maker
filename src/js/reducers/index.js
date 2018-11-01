import {
    ADD_MOVIE,
    DELETE_MOVIE
} from "../constants/action-types";

const initialState = {
    movies: [
        {
            title: "Harry Potter and the Order of the Pheonix",
            id: 1
        },
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload] 
            }
        case DELETE_MOVIE:
            const newMovieArray = state.movies.filter(el => el.id !== action.payload.id)
            return {
                ...state,
                movies: [...newMovieArray] 
            }
        default:
            return state;
    }
};

export default rootReducer;