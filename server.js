const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


// 1. Be Polite, Greet the User

app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Hello there, ${req.params.username}!`);
});

// 2. Rolling the Dice

app.get('/roll/:number', (req, res) => {
    let param = parseInt(req.params.number);
    if (Number.isInteger(param)) {
        let integer = Math.floor(Math.random()* (param + 1));
        res.send(`<p>You rolled a ${integer}`);
    } else {
        res.send('<p>You must specify a number.');
    }
});