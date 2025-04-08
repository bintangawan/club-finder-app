const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin'); 
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
        }),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src/public'),
                    to: path.join(__dirname, 'dist'),
                }
            ]
        }),
        new FaviconsWebpackPlugin({
            logo: path.join(__dirname, 'src/public/favicon.png'),
            mode: 'webapp',
            devMode: 'webapp',
        })
    ]
}