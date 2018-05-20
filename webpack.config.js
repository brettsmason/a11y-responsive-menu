const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Export our module for Webpack.
 *
 * @since  1.0.0
 * @access public
 * @return function
 */
module.exports = env => {
	return {
		// Set the mode based on whether we're in production or dev.
		mode: env.production ? 'production' : 'development',

		entry: {
            'responsive-menu': [
                './src/responsive-menu.js',
                './src/responsive-menu.scss'
            ],
            'test': './src/test.js'
        },

		output: {
			path: path.resolve('./dist')
		},

		// Console stats output.
		// @link https://webpack.js.org/configuration/stats/#stats
		stats: 'minimal',

		// Performance settings.
		performance: {
			hints: false
		},

		// Build rules to handle asset files.
		module: {
			rules: [
				// Scripts.
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},

				// Styles.
				{
					test: /\.s[ac]ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								outputStyle: 'expanded'
							}
						}
					]
				},
			]
		},

		// Plugins.
		plugins: [

			// Extract CSS into individual files.
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),

		]
	};
};
