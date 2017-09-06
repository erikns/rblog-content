const fs = require('fs');
const path = require('path');
const publicDir = __dirname + '/../public/';

function readDb() {
    return JSON.parse(fs.readFileSync(publicDir + 'db.json'));
}

function saveDb(db) {
    const jsonString = JSON.stringify(db, null, 4);
    console.log(jsonString);
    fs.writeFileSync(publicDir + 'db.json', jsonString);
}

function addPost(slug, date) {
    const db = readDb();
    db.push({
        file: slug,
        publicationDate: date
    });
    const postFileName = publicDir + 'posts/' + slug + '.md';
    fs.writeFileSync(postFileName, '');
    saveDb(db);
    return postFileName;
}

function checkDb(db) {
    const errors = [];
    for (var post of db) {
        const postFile = publicDir + 'posts/' + post.file + '.md';
        if (!fs.existsSync(postFile)) {
            errors.push('Post file ' + path.relative('', postFile) + ' does not exist');
        }
    }
    return {
        ok: errors.length == 0,
        errors: errors
    };
}

module.exports = {
    readDb: readDb,
    addPost: addPost,
    checkDb, checkDb
};
