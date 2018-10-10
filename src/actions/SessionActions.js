import { SESSION_DELETE, SESSION_RECOVER, SESSION_UPDATE } from '../constants';
import { destroySession, saveSession } from '../lib/localStorage';

const updateSession = (token, user) => ({ type: SESSION_UPDATE, payload: { token, user } });
const deleteSession = () => ({ type: SESSION_DELETE });
export const recoverSession = () => ({ type: SESSION_RECOVER });

export const updateAndSaveSession = (token, user) => {
    return (dispatch) => {
        dispatch(updateSession(token, user));
        saveSession(token, user);
    };
};

export const cleanSession = () => {
    return (dispatch) => {
        destroySession();
        dispatch(deleteSession());
    };
};
