module.exports = {
	context: __dirname,
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
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