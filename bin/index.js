#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
  .usage("Usage: $0 <command> [options]")
  .help('help')
  .command("new [projectName]", "New project", (yargs) => {
    yargs.positional('projectName', {describe: 'project name'})
    .option("z", {alias: "zenclass", describe: "ZenClassname", type: 'string', demandOption: true})
    .option("n", {alias: "namespace", describe: "namespace", type: 'string'})
  })
  .option("b", { alias: "build", describe: "Import build file to Zen class", type: "string" })
  .option("s", { alias: "search", describe: "Search term", type: "string" })
  .demandCommand(1, 'You need at least one command before moving on')
  .alias('h', 'help')
  .argv;


console.log(options);
