const REGEX = {
    EMAIL: /[\w-]+@([\w-]+\.)+[\w-]+/
};

export const isValidEmail = (email) => {
    return REGEX.EMAIL.test(email);
};

export const isValidPassword = (password) => {
    return password.length >= 6;
};

export const isObjectEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};
