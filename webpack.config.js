const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, './app'),
        publicPath: '/',
        filename: 'app.js'
    },

    devServer: {
        open: true,
        port: 5000,
        writeToDisk: true,
      },

   

    module: {

        rules: [

          {

            test: /\.html$/i,

            use: [
                {
                    loader: 'html-loader',
                }
            ]
          },

          {
            test: /\.(sass|css|scss)$/,

            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ],
          },

          {

            test: /\.(svg|eot|woff|woff2|ttf)$/,
    
            exclude: /images/,
    
            use: [
    
              {
    
                loader: "file-loader", 
    
                options: {
    
                  name: '[name].[ext]',
    
                  outputPath: "assets/fonts",
    
                }
    
              }
    
            ]
    
          },
        ]
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"

        }),
        new HtmlWebpackPlugin({

            filename: 'index.html',

            template: './src/index.html',

        }),

    ]

}