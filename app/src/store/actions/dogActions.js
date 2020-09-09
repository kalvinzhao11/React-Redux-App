import axios from 'axios'

export const FETCH_DOG = "FETCH_DOG";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_ERROR = "FETCH_DOG_ERROR";

export const fetchDOG = () => {
    return (dispatch) => {
        dispatch({type: FETCH_DOG})
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                console.log(response)
                dispatch({type: FETCH_DOG_SUCCESS, payload: response.data})
            })
            .catch(error => {
                console.error(error)
                dispatch({type: FETCH_DOG_ERROR, payload: 'An Error has occur'})
            })
    }
}