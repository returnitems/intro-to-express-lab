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
        res.send(`<p>So you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!</p>`);
  }
});

// 4. Filter Shoes by Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const minPrice = parseInt(req.query['min-price']);
    const maxPrice = parseInt(req.query['max-price']);
    const type = req.query.type;
    const resultShoes = [];

    for (let i = 0; i < shoes.length; i++) {
        if ((Number.isNaN(minPrice) || minPrice > shoes[i].price) && (Number.isNaN(maxPrice) || maxPrice < shoes[i].price) && (!type || type === shoes[i].type)) {
            resultShoes.push(shoes[i]);
        }
    }
    res.send(resultShoes);
});