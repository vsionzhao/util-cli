/**
 * @Author: vsionzhao https://github.com/vsionzhao
 * @Date: 2021/11/3
 */
const spawn = require('cross-spawn');

function vueGenerator(name, targetDir, options) {
  return new Promise(async (resolve, reject)=> {
    const child = spawn('vue', ['-V'], {
      stdio: 'inherit'
    });
    child.on('close', async function (code) {
      // 还没安装vue-cli
      if (code !== 0) {
        const data = await installVueCli()
        if (!data) reject(false)
      }
      const res = await execVueCli(name)
      if (res) resolve(true)
      else reject(false)
    })
    child.on('error', () => {
      logger('install vue-cli', 'green')
    })
  })
}
// 安装vue-cli
function installVueCli() {
  return new Promise((resolve, reject) => {
    const child = spawn('npm', ['install', '@vue/cli', '-g'], {
      stdio: 'inherit'
    });
    child.on('close', function (code) {
      if (code === 0) resolve(true)
      else reject(false)
    })
  })
}

// 生成vue模板
function execVueCli(name) {
  return new Promise((resolve, reject) => {
    const child = spawn('vue', ['create', name], {
      stdio: 'inherit'
    });
    child.on('close', function (code, ...rest) {
      if (code === 0) resolve(true)
      else reject(false)
    })
  })
}

module.exports = vueGenerator