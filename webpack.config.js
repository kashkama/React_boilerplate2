const webpack = require("webpack");
const {resolve} = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {

    entry: [
        "babel-polyfill",
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        resolve(__dirname, "src", "index.jsx")
    ],

    output: {
        filename: "app.bundle.js",
        path: resolve(__dirname, "dist"),
        publicPath: "/"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "#source-map",

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, "dist"),
        stats: "errors-only",
        open: true,
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFile: "./.eslintrc.json"
                }
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "env", {
                                "modules": false
                            }
                        ],
                        "stage-3",
                        "react"
                    ],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [autoprefixer];
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "url-loader?limit=10000"
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: "template.ejs",
            appMountId: "root",
            title: "React_App",
            filename: resolve(__dirname, "dist", "index.html")
        }),
        new CleanWebpackPlugin(["dist"])
    ]
};