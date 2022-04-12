const { default: merge } = require("webpack-merge")
const path = require('path');
const common = require("./webpack.common");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true,
        hot: true
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin()
    ],
    devtool: "eval-source-map",
    module: {
        rules: {
            use: ["style-loader", "css-loader","sass-loader"],
            test: /.(css|sass|scss)$/,
        },
    }
}

module.exports = merge(common, devConfig)