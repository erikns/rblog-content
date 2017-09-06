const util = require('./util');
const commander = require('commander');

commander
    .arguments('<slug>')
    .action((slug) => {
        createSlug = slug;
    });

commander.parse(process.argv);

if (typeof createSlug === 'undefined') {
    console.error('no slug given');
    process.exit(1);
}

const postFile = util.addPost(createSlug, '12-12-2017');
console.log("Created post file: '" + postFile + "'");
