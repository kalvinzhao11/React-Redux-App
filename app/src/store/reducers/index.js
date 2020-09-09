import {
    FETCH_DOG,
    FETCH_DOG_SUCCESS,
    FETCH_DOG_ERROR, 
} from '../actions';

const initialState = {
    dogData: [],
    loading: true,
    errorMessage: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_DOG:
            return {
                ...state, loading: true
            }
        case FETCH_DOG_SUCCESS:
            return {
                ...state, dogData: action.payload, errorMessage: '', loading: false
            }
        case FETCH_DOG_ERROR:
            return {
                ...state, dogData: [], errorMessage: action.payload, loading: true
            }
        default:
            return state
    }
}