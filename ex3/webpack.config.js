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
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
};
