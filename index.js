'use strict';

var program = require('commander');
var packageJson = require('./package.json');

// Load commands from the `cmd` directory
require('./cmd')(program);


program
  .version(packageJson.version)
  .usage('<command> [options]')
  .option('-d, --debug', 'show debug info');

program.on('*', function() {
  console.log('Unknown Command: ' + program.args.join(' '));
  program.help();
});

program.parse(process.argv);
