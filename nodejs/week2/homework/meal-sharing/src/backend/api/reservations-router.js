const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const requestedReservation = reservations.find(reservation => reservation.id === Number(request.params['id']));
    response.send(requestedReservation)
  } catch (error) {
    throw error;
  }
});

module.exports = router;