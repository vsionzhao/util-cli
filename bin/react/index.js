/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
 */

const { program } = require('commander');
program
    .command('react <app-name>')
    .description('create a react project')
    .action((name, options) => {
      require('../../lib/create')('react',name, options)
    })