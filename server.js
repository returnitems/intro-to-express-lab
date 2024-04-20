const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// 1. Be Polite, Greet the User

app.get("/greetings/:username", (req, res) => {
  res.send(`<h1>Hello there, ${req.params.username}!</h1>`);
});

// 2. Rolling the Dice

app.get("/roll/:number", (req, res) => {
  let param = parseInt(req.params.number);
  if (Number.isInteger(param)) {
    let integer = Math.floor(Math.random() * (param + 1));
    res.send(`<p>You rolled a ${integer}`);
  } else {
    res.send("<p>You must specify a number.</p>");
  }
});

// 3. I Want THAT One!

app.get("/collectibles/:index", (req, res) => {
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];

  if (req.params.index > collectibles.length - 1) {
    res.send('<p>This item is not yet in stock.</p>');
  } else {
        res.send(`<p>So you want the ${collectibles[req.params.index].name}?</p>`);
  }
});
