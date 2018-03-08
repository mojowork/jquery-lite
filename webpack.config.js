const path = require('path');

module.exports = {
    entry: './src/jquery-lite.js',
    output: {
        filename: 'jquery-lite.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};