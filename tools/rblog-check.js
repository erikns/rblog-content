const util = require('./util');

const db = util.readDb();
const result = util.checkDb(db);

console.log(result);

if (result.ok) {
    process.exit(0);
} else {
    process.exit(1);
}
