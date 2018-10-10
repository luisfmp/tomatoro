import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    sessionReducer,
    loginReducer,
    registerReducer
} from './reducers';

const reducer = combineReducers({
    session: sessionReducer,
    login: loginReducer,
    register: registerReducer
});

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
