const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
            '@redux': path.resolve(__dirname, 'src/redux/'),
        },
    };
    return config;
};