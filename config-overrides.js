const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@components': path.resolve(__dirname, 'src/components'),
            '@interfaces': path.resolve(__dirname, 'src/types/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@redux': path.resolve(__dirname, 'src/redux/')
        },
    };
    return config;
};