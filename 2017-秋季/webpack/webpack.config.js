const path = require('path');
const HtmlPlugin= require('html-webpack-plugin')
const UglifyJsPlugin= require('Uglifyjs-webpack-plugin')

module.exports={
    entry:{
        entry:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
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
        new UglifyJsPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081

    }
}