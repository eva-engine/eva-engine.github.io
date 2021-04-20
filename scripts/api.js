const args = require('minimist')(process.argv.slice(2))
const replace = require('replace')
const execa = require('execa')
const shell = require('shelljs')
const chalk = require('chalk')

const WORKSPACE = 'workspace'
const REPO = 'git@github.com:eva-engine/eva.js.git'

if (!REPO) {
  console.log(chalk.yellow('Please set repo by `export REPO=xxxx`.'))
  process.exit(0)
}

// only package lib directory changes will regenerate api docs
function isPackageChange(file) {
  return /packages\/[\w-]+\/lib\//.test(file)
}

// get package name from diff string
function getPackageName(diffItem) {
  const file = diffItem.split('|')[0].trim() || ''
  const [, package = ''] = file.split('/')
  return package
}

async function main() {
  shell.rm('-rf', WORKSPACE)

  if (!shell.which('git')) {
    console.log(chalk.yellow('git 命令不存在，请先安装'))
    process.exit(0)
  }

  if (!shell.which('lerna')) {
    console.log(chalk.yellow('lerna 命令不存在，请先安装'))
    process.exit(0)
  }

  shell.exec(`git clone ${REPO} ${WORKSPACE}`)
  shell.cd(WORKSPACE)

  let packages
  if (args.force || args.f) {
    packages = ''
  } else {
    const { stdout: tagsStr } = await execa('git', ['tag', '--list'])
    const [prevTag, tag] = tagsStr.split('\n').slice(-2)
    let changedPackages = []
    // diff tag with prevTag
    if (prevTag && tag) {
      const { stdout: diffRes } = await execa('git', ['diff', tag, prevTag, '--stat'])
      changedPackages = diffRes.split('\n').filter(isPackageChange).map(getPackageName)
      changedPackages = Array.from(new Set(changedPackages))
    }
    if (changedPackages.length == 0) {
      console.log(chalk.green('There is no package need to generate api doc.'))
      process.exit(0)
    }
    console.log(chalk.green('Packages need regenerate api doc as follows: \n'))
    console.log(changedPackages)
    packages = changedPackages.join(' ')
  }

  // TODO: only generate declartion file
  shell.exec('lerna bootstrap')
  shell.exec('npm i')
  shell.exec(`npm run build ${packages} -- --release --formats esm`)
  shell.exec('npm run api')

  // // replace '(./' to '(api/' for correct hash route
  replace({
    regex: /\(\./g,
    replacement: '(api',
    paths: ['./docs/api'],
    recursive: true,
    silent: true
  })

  shell.cp('./docs/api/*.md', '../docs/api/')
  shell.rm('-rf', WORKSPACE)
  console.log(chalk.green('Successfully! Run `npm run start` to check api docs.'))
}

main()
