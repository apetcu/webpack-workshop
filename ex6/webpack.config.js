const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');



const public_dir = "./public/";
const dev_dir = "./src/";


/**
 * Webpack actual config
 */

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: ["jquery"],
        app: dev_dir + "index.js"
    },
    output: {
        path: __dirname,
        filename: public_dir + "assets/[name].js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin(public_dir + "assets/stlye.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
        new UglifyJSPlugin()
    ]
};
