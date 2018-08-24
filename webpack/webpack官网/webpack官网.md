# 1.安装
```
npm install --save-dev webpack
```
如果你使用 webpack 4+ 版本，你还需要安装 CLI。

```
npm install --save-dev webpack-cli
```

# 2.起步
```
mkdir webpack-demo && cd webpack-demo

npm init -y

npm install webpack webpack-cli --save-dev
```

npx命令，可以运行在初始安装的webpack包（package）的webpack二进制文件。

# 3.资源管理

## 加载CSS
```javascript
npm install --save-dev style-loader css-loader
```
webpack.config.js
```javascript
module: {
    rules: [
    // 加载CSS
    {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
    }
    ]
}
```

## 加载图片
```javascript
npm install --save-dev file-loader
npm install image-webpack-loader --save-dev     // 压缩各种图片
npm install url-loader --save-dev       // 在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
```

webpack.config.js
```javascript
module: {
    rules: [
    // 加载图片
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    },
    // image-webpack-loader 
    {
        loader: 'image-webpack-loader',
        options: {
            mozjpeg: {
                progressive: true,
                quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
                enabled: false,
            },
            pngquant: {
                quality: '65-90',
                speed: 4
            },
            gifsicle: {
                interlaced: false,
            }
        }
    },
    // url-loader
    {
        loader: 'url-loader',
        options: {
            limit: 350 * 1024
        }
    },
    // 加载字体
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
    }，
    // 加载数据
    {
        test: /\.(csv|tsv)$/,
        use: [
            'csv-loader'
        ]
    },
    {
        test: /\.xml$/,
        use: [
            'xml-loader'
        ]
    }
    ]
}
```

# 管理输出

## 设定 HtmlWebpackPlugin
```javascript
npm install --save-dev html-webpack-plugin
```
webpack.config.js
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
};
```
## 清理dist文件夹
```javascript
npm install clean-webpack-plugin --save-dev
```
webpack.config.js
```javascript
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
};
```

## Manifest
```javascript
npm install clean-webpack-plugin --save-dev
```
webpack.config.js
```javascript
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    plugins: [
        new ManifestPlugin({
            writeToFileEmit: true
        })
    ],
};
```

# 开发

## 使用source map
```javascript
devtool: 'inline-source-map',
```

选择一个开发工具

1. 使用观察模式
```javascript
"watch": "webpack --watch",
```
需要手动刷新页面

2. 使用 webpack-dev-server 
```javascript
npm install --save-dev webpack-dev-server
```

webpack.config.js
```javascript
"start": "webpack-dev-server --open",

devServer: {
    contentBase: './dist'
}
```

3. webpack-dev-middleware

# 模块热替换

## 启用 HMR
webpack.config.js
```javascript
const webpack = require('webpack');
devServer: {
    hot: true
},
plugins: [
    new webpack.HotModuleReplacementPlugin()
]
```
index.js
```js
if (module.hot) {
    module.hot.accept(['./print.js'], function () {
        // console.log('Accepting the updated printMe module!');
        // printMe();
    })
}
```
# tree shaking

## 将文件标记为无副作用(side-effect-free)
package.json
```js
"sideEffects": false
```

## 压缩输出
```js
mode: "production"
```

# 生产环境构建

## 指定环境
webpack.prod.js
```js
new webpack.DefinePlugin({
   'process.env.NODE_ENV': JSON.stringify('production')
})
```

# 代码分离

## 入口起点
