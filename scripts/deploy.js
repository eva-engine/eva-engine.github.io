const args = require('minimist')(process.argv.slice(2))
const execa = require('execa')
const shell = require('shelljs')
const chalk = require('chalk')
// const semver = require('semver')
// const { prompt } = require('enquirer')

const WORKSPACE = 'workspace'
const EVAJS_REPO = 'git@gitlab.alibaba-inc.com:eva/evajs.git'

function isCodeChange(file) {
  if (
    file.indexOf('packages') !== -1 &&
    file.indexOf('evajs-cdn') === -1 &&
    file.indexOf('__tests__') === -1
  ) {
    return true
  }
  return false
}

async function main() {
  shell.rm('-rf', WORKSPACE)

  // 0. 检查git
  if (!shell.which('git')) {
    console.log(chalk.yellow('git 命令不存在，请先安装'))
    process.exit(0)
  }

  const evaBranch = args.branch || 'dev1.0'
  shell.exec(`git clone -b ${evaBranch} ${EVAJS_REPO} ${WORKSPACE}`)

  // 检查 eva.js packages，如果有skipAPI则不检查
  shell.cd(WORKSPACE)
  const { stdout: tagsStr } = await execa('git', ['tag', '--list'])
  const [prevTag, tag] = tagsStr.split('\n').slice(-2)
  let packagesChanged = false
  let commitMsg = ''
  if (prevTag && tag) {
    const { stdout: diffRes } = await execa('git', ['diff', tag, prevTag, '--stat'])
    const changedPackages = diffRes
      .split('\n')
      .map(diffItem => diffItem.split('|')[0].trim())
      .filter(isCodeChange)
    console.log(changedPackages)
    if (changedPackages.length) {
      packagesChanged = true
      commitMsg = tag
    }
  }

  const skipAPI = args.skipAPI
  if (packagesChanged && !skipAPI) {
    await execa('npm', ['run', 'api'])
    // 修复API文档中md路径
  }

  shell.cd('..')
  shell.exec(`git commit -m ${commitMsg}`)
  shell.exec('git push')
}

main()
