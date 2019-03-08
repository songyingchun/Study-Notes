const {injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env){
    // antd按需加載
    config = injectBabelPlugin([
        'import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}
    ], config);
    // 添加装饰顺能力
    config = injectBabelPlugin([
        '@babel/plugin-proposal-decorators', {
            'legacy': true
        }
    ], config);
    return config;
}


