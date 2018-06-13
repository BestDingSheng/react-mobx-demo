const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	entry:'./src/index.js',
	output:{
		filename:'app.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
		{
			test:/\.(js|jsx)/,
			exclude:/node_modules/,
			use:{
				loader:'babel-loader'
			}
		},
		{
			test:/\.(scss|sass)$/,
			exclude:/node_modules/,
			use:['style-loader','css-loader','sass-loader']
		},
		{
			test:/\.(png|svg|jpg|gif)$/,
			use:['url-loader']
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['url-loader']
		}
		]
	},
	plugins:[
	new HtmlWebpackPlugin({
		title: 'production',
		template: './index.html'    
	}),
		// hot 检测文件改动替换plugin
		new webpack.NamedModulesPlugin(),      
		new webpack.HotModuleReplacementPlugin()
		],
		devServer:{
			contentBase:'./dist',
			hot:true
		},
		devtool: '#source-map'

	}