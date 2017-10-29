const path = require('path');
const HtmlPlugin= require('html-webpack-plugin')
const UglifyJsPlugin= require('Uglifyjs-webpack-plugin')
const ExtractTextPlugin=require("extract-text-webpack-plugin")
module.exports={
    entry:{
        entry:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //use:['style-loader','css-loader']
                
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader", 


                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new UglifyJsPlugin(),
        new ExtractTextPlugin("css/index.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081

    }
}