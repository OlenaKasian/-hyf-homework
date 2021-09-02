const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

// filter meals by query parameters
router.get("/", async (request, response) => {
  try {
    let resultedMeals = meals;
    if (request.query.maxPrice) {
      const maxPrice = Number(request.query.maxPrice)
      resultedMeals = resultedMeals.filter(meal => meal.price <= maxPrice);
    }

    if (request.query.title) {
      const requestedTitle = request.query.title
      resultedMeals = resultedMeals.filter(meal => meal.title.includes(requestedTitle));
    }

    if (request.query.createdAfter) {
      const createdAfter = Date.parse(request.query.createdAfter)
      console.log(createdAfter);
      resultedMeals = resultedMeals.filter(meal => Date.parse(meal.createdAt) > createdAfter)
    }

    if (request.query.limit) {
      resultedMeals = resultedMeals.slice(0, request.query.limit);
    }

    response.send(resultedMeals);
  } catch (error) {
    throw error;
  }
});

// provide meal by requested Id
router.get("/:id", async (request, response) => {
  try {
    const requestedMeal = meals.find(meal => meal.id === Number(request.params['id']));
    if (requestedMeal) {
      response.send(requestedMeal)
    }
    response.send(`There is no meal with '${request.params['id']}' id`)
  } catch (error) {
    throw error;
  }
});

module.exports = router;
