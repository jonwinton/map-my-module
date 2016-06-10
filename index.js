'use strict';

const yargs = require('yargs');

yargs.usage('Usage: $0 [command]')
  .wrap(Math.min(200))
  .command('womp', 'Run a batch of commands', function() {
    console.log('womp');
  })
  .help('h')
  .version(function() {
    return require('./package.json').version;
  })
  .showHelpOnFail(false, 'Specify --help for available options')
  .alias('h', 'help')
  .demand(1);

yargs.help();

