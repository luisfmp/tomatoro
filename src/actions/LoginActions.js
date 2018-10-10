import { LOGIN_UPDATE_EMAIL, LOGIN_UPDATE_PASSWORD } from '../constants';
import { logError } from '../lib/errorLogger';
import { apiLogIn } from '../lib/apiAuthService';
import { updateAndSaveSession } from './SessionActions';

/*
 * SIMPLE ACTIONS
 */
export const updateEmail = (email) => ({ type: LOGIN_UPDATE_EMAIL, payload: email });
export const updatePassword = (password) => ({ type: LOGIN_UPDATE_PASSWORD, payload: password });

/*
 * ASYNC ACTIONS
 */
export const doLogIn = () => {
    return (dispatch, getState) => {
        const loginState = getState().login;

        return apiLogIn(loginState.email, loginState.password)
            .then((response) => {
                if (!response.data || !response.data.token || !response.data.user) {
                    logError({ error: 'No token returned from api', response });
                }

                const { token, user } = response.data;

                return dispatch(updateAndSaveSession(token, user));
            })
            .catch(() => {
                return Promise.reject();
            })
            .finally(() => {
                dispatch(updatePassword(''));
            });
    }
};
