import {
    ADD_MOVIE,
    DELETE_MOVIE,
    TOGGLE_SAVING_LIST
} from "../constants/action-types";

const initialState = {
    movies: [
        {
            title: "Harry Potter and the Order of the Pheonix",
            id: 1
        },
    ],
    savingList: false
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
        case TOGGLE_SAVING_LIST:
            return {
                ...state,
                savingList: !state.savingList 
            }
        default:
            return state;
    }
};

export default rootReducer;