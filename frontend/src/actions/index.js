import axios from 'axios';

export const LOADING = 'LOADING';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const CHANGE_LOADING = 'CHANGE_LOADING';


export const registerUser = (user) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios.post('/register/', user)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: REGISTER,
                    payload: response.data
                })
                // dispatch({ type: CHANGE_LOADING });
            })
            .catch(err => {
                dispatch({ type: CHANGE_LOADING });
                console.log(err)
            })
    }
}


export const loginUser = () => {
    return dispatch => {
        dispatch({ type: LOADING })
        axios.get('/login/')
            .then(response => {
                dispatch({
                    type: LOGIN,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({ type: CHANGE_LOADING });
                console.log(err)
            })
    }
}