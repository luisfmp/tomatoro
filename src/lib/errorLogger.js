import Raven from 'raven-js';

let isInitialized;

export const initErrorLogger = () => {
    if (process.env.NODE_ENV === 'development') {
        console.info('Sentry not loaded, development mode');
    } else {
        Raven.config('https://0410a96c11aa4e8c85c704f502b9d986@sentry.io/1260447').install();
        console.info('Sentry ready!');
        isInitialized = true;
    }
};

export const logError = (error) => {
    if (isInitialized) {
        Raven.captureException(error);
    } else {
        console.error(error);
    }
};
