module.exports = {
    publicPath: "./", 
    devServer: {
        port: '10000',
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `vueApp`,
            libraryTarget: 'umd',
        },
    },
}