import { LOADING, REGISTER, LOGIN, CHANGE_LOADING } from '../actions';

// team discussion on what the state should look like
const defaultState = {
    user: [],
    loading: false,
    error: ""
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: true }

        case REGISTER:
            return {...state, user :[...state.user, action.payload ]}

        case LOGIN:
            return {...state, user: [action.payload]}

        case CHANGE_LOADING:
            return {...state, loading: false }

        default:
            return state;
    }
}