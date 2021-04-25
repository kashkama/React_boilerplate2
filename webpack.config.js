const webpack = require("webpack");
const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');


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
        extensions: [".js"]
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
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ["react-hot-loader/babel", "@babel/plugin-transform-runtime"]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require("sass"),
                      sassOptions: {
                        fiber: require("fibers"),
                      },
                    },
                  },
                ],
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
        new CleanWebpackPlugin(["dist"]),
        new ESLintPlugin({
            fix: true
        })
    ]
};