const program = require('commander');
program
    .command('list', 'list blog posts', {isDefault: true})
    .command('create <slug>', 'create new post')
    .parse(process.argv);
