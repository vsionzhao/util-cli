/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
 */
const path = require('path')
const { pathExistsSync, remove } = require('fs-extra')
const inquirer = require('inquirer')
const Generator = require('./generator')

module.exports = async function (type, name, opt) {
  const { path: optPath } = opt
  // 获取当前目录
  const cwd = process.cwd()

  // 需要生成文件的目录地址
  const targetDir = ['vue', 'react'].includes(type) ? path.join(cwd, name) :  (optPath || path.join(cwd, name))
  if (pathExistsSync(targetDir)){
    // 目录存在
    const { action } = await inquirer.prompt([
      {
        name: 'action',
        type: 'confirm',
        message: 'directory already exists, is overwrite?'
      }
    ])
    if (action) {
      await remove(targetDir)
    }
  }
  const generator = new Generator(type, name, targetDir, opt)
  // 开始创建
  generator.create()
}