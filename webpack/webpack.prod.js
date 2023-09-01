/* eslint-disable prettier/prettier */
const webpack = require('webpack')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.name': JSON.stringify('Codevolution'),
		}),
	],
}