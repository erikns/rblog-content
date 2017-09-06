const util = require('./util');
const dateformat = require('dateformat');
const commander = require('commander');

commander
    .arguments('<slug> [date]')
    .action((slug, date) => {
        createSlug = slug;
        createDate = date;
        if (!date) {
            console.log('Date is not given. Using today');
            createDate = dateformat(new Date(), 'dd-mm-yyyy');
        }
    });

commander.parse(process.argv);

if (typeof createSlug === 'undefined') {
    console.error('no slug given');
    process.exit(1);
}

const postFile = util.addPost(createSlug, createDate);
console.log("Created post file: '" + postFile + "'");
