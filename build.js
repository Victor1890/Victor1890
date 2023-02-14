'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Victor Rosario'),
  shorthandle: chalk.white('Victor1890'),
  work: chalk.white('Full Stack Developer'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~victor1890'),
  github: chalk.gray('https://github.com/') + chalk.green('Victor1890'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('victor-j-rosario-v') + chalk.gray('/?locale=en_US'),
  blog: chalk.gray('https://dev.to/') + chalk.blue('victor1890'),
  web: chalk.cyan('https://victorrosario1890.vercel.app'),
  npx: chalk.red('npx') + ' ' + chalk.white('victor1890'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelBlog: chalk.white.bold('  Dev.to:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const bloging = `${data.labelBlog}  ${data.blog}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  npming + newline + // data.labelnpm + data.npm
  githubing + newline + // data.labelGitHub + data.github
  linkedining + newline + // data.labelLinkedIn + data.linkedin
  bloging + newline + // data.labelLinkedIn + data.linkedin
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
