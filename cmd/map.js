function map(program) {
  return program
   .command('map')
   .description('Map a module')
   .action(function() {
    console.log('Womp');
   });
}

module.exports = map;
