const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let confIndex = {
    entry: "./src/js/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, `./dist/`)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            { 
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }           
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            minify: false
        }),
        new HtmlWebpackPugPlugin()
    ],
    devServer: {
        publicPath: `/dist/`
    },
};

module.exports = (env, argv) => {
    let isProd = argv.mode === 'production';
    confIndex.devtool = isProd ? false : 'eval-cheap-module-source-map';
    confIndex.target = isProd ? "browserslist" : "web";
    return confIndex;
}