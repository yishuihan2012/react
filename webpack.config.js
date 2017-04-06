var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [{
      test: /\.js[x]?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
      exclude: /node_modules/,
        query: {
            presets: ['react', 'es2015']
        }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },
    { 
      test: /\.(woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
    },
    {
　　　　test: /\.(png|jpg|gif|jpeg)$/,
　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
　　　}]
  }
};
