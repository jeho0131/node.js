const express = require('express');
const app = express();

app.use(sayHello);

app.get('/', (req, res) => {
    res.send("<h1>HOMEPAGE</h1>");
});

app.get('/users',whoAreYou, (req,res) => {
    res.send("<h1>USERS</h1>");
});

function sayHello(req, res, next){
    console.log("Welcome");
    next();
}

function whoAreYou(req, res, next) {
    console.log('who are you?');
    next();
}

app.listen(8080);