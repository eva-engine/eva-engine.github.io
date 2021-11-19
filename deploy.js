const args = require('minimist')(process.argv.slice(2));
const util = require('util')
const exec = util.promisify(require('child_process').exec)
