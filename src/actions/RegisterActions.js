import { REGISTER_CLEAR_INFORMATION, REGISTER_UPDATE_INFORMATION } from '../constants';
import { apiSignIn } from '../lib/apiAuthService';

export const updateInformation = (form) => ({ type: REGISTER_UPDATE_INFORMATION, payload: form });
export const clearInformation = () => ({ type: REGISTER_CLEAR_INFORMATION });

export const doRegister = () => {
    return (dispatch, getState) => {
        const form = getState().register.form;
        return apiSignIn(form.email, form.password, form.firstName, form.lastName);
    };
};
