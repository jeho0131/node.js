const express = require('express');
const app = express();

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('something broke!');
});

app.listen(8080);