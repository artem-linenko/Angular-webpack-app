const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: {
		cart: './frontend/cart.js',
		admin: './frontend/admin.js'
	},
	output: {
		path: __dirname + '/public/scripts',
		filename: '[name].js'
	},
	module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.js$/, loaders: ['babel']}
        ]
    },
    watch: true,
    devtool: "source-map"
}