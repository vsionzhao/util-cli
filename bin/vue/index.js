/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
*/

const { program } = require('commander');
program
    .command('vue <app-name>')
    .description('create a vue project')
    .action((name, options) => {
      require('../../lib/create')('vue', name, options)
    })