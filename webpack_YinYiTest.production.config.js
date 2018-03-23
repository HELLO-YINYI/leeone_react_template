/**
 * Created by YINYI on 2018/3/14 0014.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var path_node_root = path.resolve(__dirname);
var ROOT_PATH = path.resolve(path_node_root, '../');

module.exports = {
    entry: {
        Default: [ROOT_PATH + "/Public/H5/app/Main/Main.jsx"],
        // 将 第三方依赖 单独打包
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router'
        ]
    },
    output: {
        path: ROOT_PATH + "/Public/H5/build/Main",//打包后的文件存放的地方
        filename: "js/[name].js"//打包后输出文件的文件名
    },
    resolve: {
        alias: {},
        extensions:['.js','.jsx', '.less', '.css']
    },
    devtool: 'false',
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    {
                        loader:"cache-loader"
                    },
                    {
                        loader: "babel-loader",
                        options: {presets: ["es2015", "react"]}
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {loader: "postcss-loader"},
                        {loader: "less-loader"}
                    ],
                }),
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }, {
                        loader: "postcss-loader"
                    }],
                }),//适配不同浏览器加前缀
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader',
                options:{
                    limit:3000,
                    publicPath:'../images',
                    outputPath:"images/"
                }
            },  // 限制大小1kb
            {test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            title: "main",
            filename: 'view/Main.html',
            template: ROOT_PATH + "/Public/H5/app/Main/Main.tmpl.html", //new 一个这个插件的实例，并传入相关的参数
            chunks: ['Default','vendor']
        }),
        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        //第三方的依赖 , webpack生成的代码 单独打包
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),//为组件分配ID
        new webpack.optimize.UglifyJsPlugin(),//压缩JS代码,并且tree shakeing调没使用的代码
        new ExtractTextPlugin("css/[name].css")//分离CSS和JS文件
    ]
};

