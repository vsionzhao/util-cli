/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
 */
const chalk = require('chalk')
function logger(msg, type = 'bold') {
  const chalkType = chalk[type]
  chalkType ? console.log(chalk[type](msg)) : console.log(msg)
}
global.logger = logger