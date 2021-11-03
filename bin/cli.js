#! /usr/bin/env node

/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
 */
const { program } = require('commander');
require('../lib/global')
require('./react')
require('./vue')

program
    // 配置版本号信息
    .version(`v${require('../package.json').version}`)
    .usage('<command> [option]')

program.parse(process.argv);