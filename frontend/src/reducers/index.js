import { LOADING, REGISTER, LOGIN, CHANGE_LOADING, ERROR, CLEAR_ERROR, GET_USER } from '../actions';

// team discussion on what the state should look like
const defaultState = {
    userKey: '',
    user: [],
    loading: false,
    success: false,
    error: false,
    errorMsg: ""
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: true }

        case REGISTER:
            return {...state, userKey: [ action.payload ], success: true}

        case LOGIN:
            return {...state, userKey: [ action.payload ], success: true}

        case CHANGE_LOADING:
            return {...state, loading: false }

        case GET_USER:
            return {...state, user: [action.payload], success: true }
        
        case ERROR:
            return {...state, error: true, errorMsg: action.payload}
        
        case CLEAR_ERROR:
            return {...state, error: false, errorMsg: ''}

        default:
            return state;
    }
}