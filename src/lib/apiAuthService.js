import Promise from 'bluebird';
import request from './apiService';

export const apiLogIn = (email, password) => {
    return new Promise((resolve, reject) => {
        request.post('/login', { email, password }, resolve, reject);
    });
};

export const apiSignIn = (email, password, firstName, lastName) => {
    return new Promise((resolve, reject) => {
        const body = {
            email,
            password,
            'first_name': firstName,
            'last_name': lastName
        };

        request.post('/register', body, resolve, reject);
    });
};
