const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const requestedReview = reviews.find(review => review.id === Number(request.params['id']));
    response.send(requestedReview)
  } catch (error) {
    throw error;
  }
});

module.exports = router;