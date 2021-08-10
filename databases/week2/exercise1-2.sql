/*Working with tasks*/
use hyf_lesson2;
/*Add a task with these attributes: 
title, description, created, updated, due_date, status_id, user_id*/
INSERT INTO
  task (
    id,
    title,
    description,
    created,
    updated,
    due_date,
    status_id
  )
VALUES
  (
    36,
    'Meditation',
    'As less 5min',
    '2021-10-25 06:54:16',
    '2021-10-15 13:05:09',
    '2021-12-15 13:05:09',
    2
  );
  /*Change the title of a task*/
UPDATE
  task
SET
  title = "Do yoga exercise"
WHERE
  id = 36;
  /*Change a task due date*/
UPDATE
  task
SET
  due_date = '2021-11-05'
WHERE
  id = 36;
  /*Change a task status*/
UPDATE
  task
SET
  status_id = "3"
WHERE
  id = 6;
  /*Mark a task as complete*/
UPDATE
  task
SET
  status_id = 3
where
  id = 36;
--Delete a task
DELETE FROM
  task
WHERE
  id = 36;

-----/*School database*/------

  /*Create a new database containing the following tables:
    Class: with the columns: id, name, begins (date), ends (date)
    Student: with the columns: id, name, email, phone, class_id (foreign key)*/
  CREATE TABLE class (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
  );
CREATE TABLE `student` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (255) NOT NULL,
    `email` VARCHAR (255) NOT NULL,
    `phone` VARCHAR (20) NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

    /*If you are done with the above tasks, you can continue with these advanced tasks:
        Create an index on the name column of the student table.*/

   CREATE UNIQUE INDEX idx_name ON `student` (name);
    /*Add a new column to the class table named status which can only have the following values:
        not-started, ongoing, finished (hint: enumerations).*/

    ALTER TABLE
      class
    ADD
      status ENUM('not-started', 'ongoing', 'finished');