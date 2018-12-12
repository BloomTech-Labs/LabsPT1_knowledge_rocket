import { LOADING, SUCCESS, ERROR } from '../actions';

// team discussion on what the state should look like
const defaultState = {
    fetching: false,
    error: ""
}

export default (state = defaultState, actions) => {
    switch(actions.type) {
        case LOADING:
            return Object.assign({}, state, { LOADING: true })

        case SUCCESS:
        // before LOADING: false, decide what the app state should be called
            return Object.assign({}, state, { LOADING: false })

        case ERROR:
        // before LOADING: false, decide what action.error should be
            return Object.assign({}, state, { LOADING: false })

        default:
            return state;
    }
}