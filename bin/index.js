#!/usr/bin/env node
'use strict'

const {resolve}  = require('path');
const yargs = require("yargs");
const cwd = resolve(yargs.argv.cwd || process.cwd());
process.chdir(cwd);

const axios = require("axios");

const options = yargs
  .usage("Usage: sven <command> [options]")
  .help('help')
  .command("new [projectName]", "New project", (yargs) => {
    yargs.positional('projectName', {describe: 'project name', demandOption: true})
    .option("z", {alias: "zenclass", describe: "ZenClassname", type: 'string', demandOption: true})
    .option("n", {alias: "namespace", describe: "namespace", type: 'string'})
  })
  .option("b", { alias: "build", describe: "Import build file to Zen class", type: "string" })
  .option("s", { alias: "search", describe: "Search term", type: "string" })
  .demandCommand(1, 'You need at least one command before moving on')
  .alias('h', 'help')
  .epilogue('  path           Path to a staticbuild.json file or directory to find one.\n' +
'                 If no path is supplied, the current directory is used.')
  .argv;


console.log(options);
console.log(cwd);
