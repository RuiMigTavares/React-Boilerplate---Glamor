const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,

    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devtool: 'inline-source-map',

    module: {
        rules: [
            //babel-loader
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "eslint-loader",
                ],
            },
            //html-loader
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
			test: /\.(css)$/,
                use:[
                    'style-loader',
                    {
                        loader : 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader : 'postcss-loader'
                    }
                ],
            },
            //sass-loader
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ],
            },
            //file-loader(for images)
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/images/',
                            limit: 5120
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [{
                        loader: 'svg-react-loader'
                    }
                ]
            }
        ]
    },
    performance: {
		hints: false
	},
}