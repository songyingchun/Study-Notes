module.exports = {
    configureWebpack: {
        devServer: {
            before(app) { //服务器
                app.get('/api/goods', (req, res) => {
                    res.json({
                        code: 0,
                        list: [
                            { id: 1, text: 'web全栈架构师', price: 1000 },
                            { id: 2, text: 'python全栈架构师', price: 1000 }
                        ]
                    })
                })
            }
        }
    }
}