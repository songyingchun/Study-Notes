// 内建模块
const os = require('os')
const cpuStat = require('cpu-stat')
const {
    rmbToDollar
} = require('./currentcy')(6)
const fs2 = require('./03-fs')
function showStatistics() {
    const mem = os.freemem() / os.totalmem * 100
    console.log(`内存占用率${mem}%`)
}
// 第三方模块
cpuStat.usagePercent((err, percent) => {
    console.log(`cpu占用率：${percent}`);
})

// setInterval(showStatistics, 1000);