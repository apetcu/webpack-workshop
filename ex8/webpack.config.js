const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Added this for config
 * @type {[type]}
 */
const path = require('path');

const public_dir = "./public/";
const dev_dir = "./src/";


/**
 * Webpack actual config
 */

module.exports = {
    entry: {
        vendor: ["jquery"],
        app: dev_dir + "index.js"
    },
    output: {
        //Changed path & public path according to new requirements
        publicPath: '/',
        path: path.join(__dirname, public_dir),
        filename: "assets/js/[name].js"
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
        new ExtractTextPlugin("assets/css/stlye.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
        new UglifyJSPlugin(),
        /**
         * Addd HTML auto generate
         */
        new HtmlWebpackPlugin({
            template: dev_dir + 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
