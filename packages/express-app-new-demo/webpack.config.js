const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './app',
    devtool: 'source-map',
    target: 'node',
    externals: [nodeExternals()],
    optimization: {
        minimize: true
    },
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: __dirname,
            exclude: [/node_modules/, /test/]
        }]
    }
};