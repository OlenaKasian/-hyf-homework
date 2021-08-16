----creating the data------
CREATE database meal_reservation_review;
use meal_reservation_review;
SET
  NAMES utf8mb4;
CREATE TABLE `meal` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255),
    `description` TEXT,
    `location` VARCHAR(255),
    `when` DATETIME,
    `max_reservations` INT(10),
    `price` DECIMAL,
    `created_date` DATE
  );
CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT (10),
    `meal_id` INT (10) UNSIGNED NOT NULL,
    `created_date` DATE,
    `contact_phonenumber` VARCHAR (25),
    `contact_name` VARCHAR (255),
    `contact_email` VARCHAR (255),
    CONSTRAINT `fk_meal` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
  );
CREATE TABLE `review` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR (255),
    `description` TEXT,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT (10),
    `created_date` DATE,
    CONSTRAINT `fk_meal_review` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
  );
INSERT INTO
  meal (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    'chicken',
    'Chicken',
    'norde fasenvej,40',
    '2021-09-01 11:18:05',
    '15',
    '150.50',
    '2021-09-01 11:18:05'
  ),
  (
    'potato',
    'potato',
    'Konge Nytro,17',
    '2021-12-01 15:50:05',
    '15',
    '100.00',
    '2021-12-01 15:50:05'
  ),
  (
    'brouny',
    'sweet cake',
    'Frederiksvej,11',
    '2021-06-08 11:30:02',
    '10',
    '110.00',
    '2021-06-08 11:30:02'
  );
INSERT INTO
  reservation (
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    '2',
    1,
    '2021-06-08',
    '+38097-999-48-50',
    'Olena',
    'cool@gmail.com'
  ),
  (
    '8',
    2,
    '2021-05-08',
    '+38097-999-48-50',
    'Alen',
    'alen@gmail.com'
  ),
  (
    '1',
    3,
    '2021-03-08',
    '+38097-999-48-50',
    'Nick',
    'nick@gmail.com'
  ),
INSERT INTO
  review (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES
  (
    'Excellent',
    'taste is excellent',
    '1',
    '5',
    '2021-03-08'
  ),
  (
    'very good',
    'very good food',
    '2',
    '4',
    '2021-03-08'
  ),
  (
    'good',
    'good taste',
    '3',
    '3',
    '2021-03-08'
  );
------Queries-----
  -----meal queries-----
  ---Get all meals---
SELECT
  *
FROM
  meal;
---Add a new meal---
INSERT INTO
  meal(
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values(
    'pizza',
    'Italian dish',
    'Rome',
    '2021-09-01 11:18:05',
    '10',
    '150.00',
    '2020-08-25 10:10:10'
  );
---Get a meal with any id, fx 1---
SELECT
  *
FROM
  review
WHERE
  id = 1;
---Update a meal with any id, fx 1.Update any attribute fx the title or multiple attributes---
UPDATE
  meal
SET
  title = 'cheese set',
  description = '4 kind of cheese'
WHERE
  id = 1;
---Delete a meal with any id, fx 1---
DELETE FROM
  meal
WHERE
  id = 1;
---Reservation---
  ---Get all reservations---
SELECT
  *
FROM
  reservation;
----Add a new reservation---
INSERT INTO
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    '3',
    5,
    '2021-02-08',
    '+38097-258-48-50',
    'Jens',
    'jens@gmail.com'
  );
---Get a reservation with any id, fx 1---
SELECT
  *
FROM
  reservation
WHERE
  id = 2;
---Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes--
UPDATE
  reservation
SET
  number_of_guests = 4
WHERE
  id = 3;
---Delete a reservation with any id, fx 1---
DELETE FROM
  reservation
WHERE
  id = 2;
---Review---
  ---Get all reviews---
SELECT
  *
FROM
  review;
---Add a new review---
INSERT INTO
  review (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES
  (
    'Exlusive',
    'specific taste',
    '4',
    '5',
    '2021-03-08'
  );
---Get a review with any id, fx 1---
SELECT
  *
FROM
  review
WHERE
  id = 3;
---Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes---
UPDATE
  review
SET
  `title` = 'deliciously',
  `created_date` = '2021-05-12'
WHERE
  id = 2;
---Delete a review with any id, fx 1---
DELETE FROM
  review
WHERE
  id = 3;
----Additional queries----
  ---Get meals that has a price smaller than a specific price fx 90--
SELECT
  *
FROM
  meal
WHERE
  price < 90
ORDER BY
  price;
-- Get meals that still has available reservations---
SELECT
  meal.title,
  meal.max_reservations,
  reservation.number_of_guests
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  meal.max_reservations > reservation.number_of_guests;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde--
SELECT
  title
FROM
  meal
WHERE
  title LIKE "%Rød grød med%";
-- Get meals that has been created between two dates--
SELECT
  *
FROM
  meal
WHERE
  created_date BETWEEN '2021-02-08'
  AND '2021-12-01';
-- Get only specific number of meals fx return only 5 meals--
SELECT
  *
FROM
  meal
LIMIT
  3;
-- Get the meals that have good reviews--
SELECT
  meal.title,
  review.stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
WHERE
  review.stars >= 4;
-- Get reservations for a specific meal sorted by created_date--
SELECT
  meal.title,
  meal.created_date,
  reservation.contact_name
from
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  meal.title = 'potato'
ORDER BY
  created_date;
-- Sort all meals by average number of stars in the reviews--
SELECT
  meal.title,
  AVG(review.stars) as Average_stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal_id
ORDER BY
  Average_stars DESC;