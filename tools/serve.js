const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

function random(high, low) {
    return Math.random() * (high - low) + low;
}

app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, random(500, 1500));
});

app.use(morgan('dev'));
app.use(cors());

const dir = __dirname + '/..';
console.log(dir);
app.use(express.static(dir));

app.listen(5000, () => {
    console.log('Serving static files on port ' + 5000);
});

