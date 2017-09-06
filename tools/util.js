const fs = require('fs');

function readDb() {
    return JSON.parse(fs.readFileSync('public/db.json'));
}

module.exports = {
    readDb: readDb
};
