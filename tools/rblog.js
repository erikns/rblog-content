const program = require('commander');
program
    .command('list', 'list blog posts', {isDefault: true})
    .command('create <slug>', 'create new post')
    .command('check', 'check db/post file consistency')
    .parse(process.argv);
