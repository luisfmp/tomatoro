/*
 *
 * reducers/login.JS
 *
 * Login information is stored here, this is, username & password.
 * Don't confuse with user session data, this is after the login.
 *
 */

import { LOGIN_UPDATE_EMAIL, LOGIN_UPDATE_IS_ERROR, LOGIN_UPDATE_PASSWORD } from '../constants';

const initState = {
    email: '',
    password: '',
    isError: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case LOGIN_UPDATE_EMAIL:
            return { ...state, email: action.payload };
        case LOGIN_UPDATE_PASSWORD:
            return { ...state, password: action.payload };
        case LOGIN_UPDATE_IS_ERROR:
            return { ...state, isError: action.payload };
        default:
            return state;
    }
};
