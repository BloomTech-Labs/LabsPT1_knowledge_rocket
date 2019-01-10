import { LOADING, REGISTER, LOGIN, CHANGE_LOADING, ERROR, CLEAR_ERROR } from '../actions';

// team discussion on what the state should look like
const defaultState = {
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
            return {...state, user :[...state.user, action.payload ], success: true}

        case LOGIN:
            return {...state, user: [action.payload], success: true}

        case CHANGE_LOADING:
            return {...state, loading: false }
        
        case ERROR:
            return {...state, error: true, errorMsg: action.payload}
        
        case CLEAR_ERROR:
            return {...state, error: false, errorMsg: ''}

        default:
            return state;
    }
}