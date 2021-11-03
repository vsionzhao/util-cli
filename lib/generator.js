/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
 */

/**
 * options
 * template boolean 是否使用脚手架模板 vue和react生效 默认: true
 */
const path = require('path')
const { pathExistsSync } = require('fs-extra')
const vueGenerator = require('./vue')

class Generator {
  /**
   *
   * @param type
   * @param name 目录名称
   * @param targetDir 创建位置
   * @param options 命令行参数
   */
  constructor(type, name, targetDir, options) {
    this.type = type;
    this.name = name;
    this.targetDir = targetDir;
    this.options = options
  }

  create() {
    const fnMap = {
      'vue': this.createVue,
      'react': this.createReact,
      'util': this.createUtil,
    }
    const fn = fnMap[this.type]
    if (fn) fn.apply(this)
  }

  async createVue() {
    const { template = true} = this.options
    const data = await vueGenerator(this.name, this.targetDir, this.options)
    if (data) {
      // 成功生成vue文件
      if (template) {
        const mainFile = path.join(this.targetDir, 'src/main.ts')

        // 检测是否为ts模式
        if (pathExistsSync(mainFile)){
          // todo ts
        } else {
          // js
        }
      }
    }
  }


  createReact() {

  }

  createUtil() {

  }
}

module.exports = Generator