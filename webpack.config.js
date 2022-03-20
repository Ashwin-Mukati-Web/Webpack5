let path = require('path')
let env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports = {
    mode: env,
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    },
    output: {
        filename: "bundle.js",
        publicPath: './dist',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: "./dist"
        }
    }
}