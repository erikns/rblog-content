const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 500);
});

app.use(morgan('dev'));
app.use(cors());

const dir = __dirname + '/..';
console.log(dir);
app.use(express.static(dir));

app.listen(5000, () => {
    console.log('Serving static files on port ' + 5000);
});

