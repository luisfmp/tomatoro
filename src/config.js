const dev = {
    apiGatewayUrl: 'http://localhost:1337'
};

const prod = {
    apiGatewayUrl: 'https://api.tomatoro.com'
};

const stage = {
    apiGatewayUrl: 'https://api.stage.tomatoro.com'
};

let config = dev;

config = process.env.REACT_APP_ENV === 'prod' ? prod : config;
config = process.env.REACT_APP_ENV === 'stage' ? stage : config;

export default {
    ...config
};
