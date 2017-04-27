module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "./src/js/bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};
