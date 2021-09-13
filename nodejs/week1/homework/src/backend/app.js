
const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(getMealsWithReviews());
});

app.get("/cheap-meals", async (request, response) => {
  response.send(getMealsWithReviews().filter(meal => meal.price < 50));
});

app.get("/large-meals", async (request, response) => {
  response.send(getMealsWithReviews().filter(meal => meal.maxNumberOfGuests > 10));
});

app.get("/meal", async (request, response) => {
  response.send(getRandomMeal());
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(getRandomReservetion());
});

function getMealsWithReviews() {
  meals.forEach(meal => {
    const relavantReviews = reviews.filter(review => review.mealId === meal.id);
    meal.reviews = relavantReviews;
  });
  return meals;
};

function getRandomMeal() {
  return meals[Math.floor(Math.random() * meals.length)];
};

function getRandomReservetion() {
  return reservations[Math.floor(Math.random() * reservations.length)];
};

module.exports = app;
