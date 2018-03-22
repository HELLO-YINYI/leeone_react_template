/**
 * Created by YINYI on 2018/3/14 0014.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        YinYiTest: [__dirname + "/Public/H5/app/YinYiTest/YinYiTest.jsx"]
    },

    output: {
        path: __dirname + "/Public/H5/build",//打包后的文件存放的地方
        filename: "js/[name].[hash].js"//打包后输出文件的文件名
    },

    devServer: {
        proxy: {
            '/Api': {
                target: 'http://test.leeonedu.com',
                secure: false
            }
        },
        contentBase: "./Public/H5/build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true
    },

    resolve: {
        alias: {},
        extensions:['.js','.jsx', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    {loader: "cache-loader"},
                    {loader: "babel-loader", options: {presets: ["es2015", "react"]}}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                    {loader: "less-loader"},
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                ],//适配不同浏览器加前缀
            },
            {test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?',
                options:{
                    limit:1000,
                    publicPath:'../',
                    outputPath:"images/"
                }
            },  // 限制大小5kb
            {test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'}, // 限制大小小于5k
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/view/'
        }),
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),//为组件分配ID
        //测试
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            title: "main",
            filename: 'view/YinYiTest.html',
            template: __dirname + "/Public/H5/app/YinYiTest/YinYiTest.tmpl.html", //new 一个这个插件的实例，并传入相关的参数
            chunks: ['YinYiTest']
        }),
    ]
};

