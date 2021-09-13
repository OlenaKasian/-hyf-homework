const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

app.get("/numbers/add", (req, res) => {
    const first = Number(req.query.first);
    const second = Number(req.query.second);
    const sum = first + second;
    res.send(sum.toString())
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const first = Number(req.params['first']);
    const second = Number(req.params['second']);
    const multiply = first*second;
    res.send(multiply.toString())
})


// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
// Example: going to localhost:3000/numbers/add?first=3&second=7 should respond with 10
