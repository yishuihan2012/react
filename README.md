## REACT

自用REACT环境

### 使用的包

```javascript
cnpm install react react-dom less less-loader style-loader css-loader react-fontawesome babel babel-loader webpack webpack-dev-server file-loader babel-preset-react babel-preset-es2015 url-loader font-awesome babel-core --save-dev
```

### WEBPACK配置文件：

```javascript
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
```

### package.json

```json
{
  "name": "react",
  "version": "1.0.0",
  "description": "module-default",
  "main": "index.js",
  "scripts": {
     "build": "webpack",
     "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lwt33713803/react.git"
  },
  "keywords": [
    "react"
  ],
  "author": "John",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lwt33713803/react/issues"
  },
  "homepage": "https://github.com/lwt33713803/react#readme",
  "devDependencies": {
    "babel": "^6.23.0",
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "css-loader": "^0.28.0",
    "file-loader": "^0.11.1",
    "font-awesome": "^4.7.0",
    "less": "^2.7.2",
    "less-loader": "^4.0.3",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-fontawesome": "^1.5.0",
    "style-loader": "^0.16.1",
    "url-loader": "^0.5.8",
    "webpack": "^2.3.3",
    "webpack-dev-server": "^2.4.2"
  }
}

```

