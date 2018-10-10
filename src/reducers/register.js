import { REGISTER_CLEAR_INFORMATION, REGISTER_UPDATE_INFORMATION, REGISTER_UPDATE_IS_ERROR } from '../constants';

const initState = {
    form: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    },
    isError: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case REGISTER_UPDATE_INFORMATION:
            return { ...state, form: action.payload };
        case REGISTER_CLEAR_INFORMATION:
            return { ...initState };
        case REGISTER_UPDATE_IS_ERROR:
            return { ...state, isError: action.payload };
        default:
            return state;
    }
}
