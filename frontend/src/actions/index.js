import axios from 'axios';

export const LOADING = 'LOADING';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const GET_USER = 'GET_USER';
export const REDIRECT = 'REDIRECT';
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT';
export const CLEAR_STATE = 'CLEAR_STATE';
export const CREATE_ROCKET = 'CREATE_ROCKET';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_USER = 'UPDATE_USER';


// https://cspt1knowledgerocket.herokuapp.com/ ** group deploy
// http://127.0.0.1:8000/ **quick ref local deploy

export const registerUser = (user) => {
  return dispatch => {
    dispatch({ type: LOADING });
    dispatch({ type: CLEAR_ERROR });
    dispatch({ type: CLEAR_REDIRECT });
    axios
      .post("https://cspt1knowledgerocket.herokuapp.com/register/", user)
      .then(response => {
        const token = response.data.token
        localStorage.setItem('token', token);
        dispatch({ type: REGISTER, payload: response.data });
        dispatch({ type: REDIRECT });
      })
      .catch(error => {
        dispatch({ type: CHANGE_LOADING });
        dispatch({ type: ERROR, payload: error.response.data.error });
        console.log( error.response.data);
      });
  };
};

export const loginUser = (user) => {
    return dispatch => {
        dispatch({ type: LOADING });
        dispatch({ type: CLEAR_ERROR });
        dispatch({ type: CLEAR_REDIRECT });
        axios
          .post("https://cspt1knowledgerocket.herokuapp.com/login/", user)
          .then(response => {
            const token = response.data.token
            localStorage.setItem('token', token);
            dispatch({ type: LOGIN, payload: response.data });
            dispatch({ type: REDIRECT });
          })
          .catch(error => {
            dispatch({ type: CHANGE_LOADING });
            dispatch({ type: ERROR, payload: error.response.data.non_field_errors[0] });
            console.log( error.response.data);
          });
    };
};

export const logoutUser = () => {
  return dispatch => {
      dispatch({ type: LOADING });
      dispatch({ type: CLEAR_ERROR });
      dispatch({ type: CLEAR_REDIRECT });
      localStorage.clear();
      dispatch({ type: CLEAR_STATE });
  };
};

export const updatePassword = (updatePass) => {
  return dispatch => {
    dispatch({ type: LOADING });
    dispatch({ type: CLEAR_ERROR });
    const userKey = localStorage.getItem('token')
    axios
      .post("https://cspt1knowledgerocket.herokuapp.com/updatepassword/", updatePass, { 'headers': { 'Authorization': `token ${userKey}` }})
      .then(response => {
        dispatch({ type: UPDATE_PASSWORD, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: CHANGE_LOADING });
        dispatch({ type: ERROR, payload: error.response.data.error });
        console.log( error.response.data);
      });
  };
};

export const updateEmail = (updateEmail) => {
  return dispatch => {
    dispatch({ type: LOADING });
    dispatch({ type: CLEAR_ERROR });
    const userKey = localStorage.getItem('token')
    axios
      .post("https://cspt1knowledgerocket.herokuapp.com/updateuser/", updateEmail, { 'headers': { 'Authorization': `token ${userKey}` }})
      .then(response => {
        dispatch({ type: UPDATE_USER, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: CHANGE_LOADING });
        dispatch({ type: ERROR, payload: error.response.data.error });
        console.log( error.response.data);
      });
  };
};

export const getUser = (userKey) => {
    return dispatch => {
        dispatch({ type: LOADING });
        dispatch({ type: CLEAR_ERROR });
        axios
          .get("https://cspt1knowledgerocket.herokuapp.com/getuser/", { 'headers': { 'Authorization': `token ${userKey}` }})
          .then(response => {
            dispatch({ type: GET_USER, payload: response.data });
          })
          .catch(error => {
            dispatch({ type: CHANGE_LOADING });
            dispatch({ type: ERROR, payload: error.response.data.error });
            console.log( error.response.data);
          });
    };
};

export const createRocket = (rocket) => {
    return dispatch => {
        dispatch({ type: LOADING });
        dispatch({ type: CLEAR_ERROR });
        const userKey = localStorage.getItem('token')
        console.log(userKey)
        console.log(rocket)
        axios
          .post("https://cspt1knowledgerocket.herokuapp.com/addrocket/", rocket, { 'headers': { 'Authorization': `token ${userKey}` }})
          .then(response => {
            dispatch({ type: CREATE_ROCKET, payload: response.data });
          })
          .catch(error => {
            dispatch({ type: CHANGE_LOADING });
            dispatch({ type: ERROR, payload: error.response.data.error });
            console.log( error.response.data);
          });
    };
};
