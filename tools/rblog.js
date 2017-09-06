// CLI with small operations for working with the posts database

const program = require('commander');
program
    .command('list', 'list blog posts', {isDefault: true})
    .parse(process.argv);
