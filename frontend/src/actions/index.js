import axios from 'axios';

export const LOADING = 'LOADING';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const CHANGE_LOADING = 'CHANGE_LOADING';

/*
Have team decide what our api should be to use axios calls
 */
export const registerUser = (user) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios.post('http://localhost:8000/register/', user)
            .then(response => {
                dispatch({
                    type: REGISTER,
                    payload: response.data
                })
                dispatch({ type: CHANGE_LOADING });
            })
            .catch(err => {
                dispatch({ type: CHANGE_LOADING });
                console.log(err)
            })
    }
}

export const loginUser = (user) => {
    return dispatch => {
        dispatch({ type: LOADING })
        axios.post('http://localhost:8000/login/', user)
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
