import axios from 'axios'

export const FETCH_FACTS = "FETCH_FACTS";
export const FETCH_FACTS_SUCCESS = "FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_ERROR = "FETCH_FACTS_ERROR";

export const fetchFacts = () => {
    return (dispatch) => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}