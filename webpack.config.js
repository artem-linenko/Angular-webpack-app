const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: {
		cart: './frontend/cart.js',
		admin: './frontend/admin.js'
	},
	output: {
		path: __dirname + '/public/scripts',
		filename: '[name].js',
		publicPath: '/public'
	},
	plugins: [
    ],
	module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.js$/, loaders: ['babel']},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    watch: true,
    devtool: "source-map"
}