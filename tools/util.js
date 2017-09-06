const fs = require('fs');
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

module.exports = {
    readDb: readDb,
    addPost: addPost
};
