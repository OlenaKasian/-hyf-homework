CREATE TABLE `autor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `Bday` DATE NOT NULL,
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `pages` int unsigned NOT NULL,
  `publication` VARCHAR(255) NULL,
  `genres` VARCHAR(255) NULL,
  `languages` VARCHAR(255) NULL,
  `autor_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_autor` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `location` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `floor` int(35) unsigned NOT NULL,
  `room` int unsigned NOT NULL,
  `racks` VARCHAR(255) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `autor_location` (
  `autor_id` int(10) unsigned NOT NULL,
  `location_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_autor_location_autor` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_autor_location_situated` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
----book----
INSERT INTO
  book (
    id,
    title,
    pages,
    publication,
    genres,
    languages,
    autor_id
  )
VALUES
  (
    1,
    'Pride and Prejudice',
    235,
    1813,
    'history',
    'English',
    1
  );
INSERT INTO
  book (
    id,
    title,
    pages,
    publication,
    genres,
    languages,
    autor_id
  )
VALUES
  (
    2,
    'The Go-Between',
    120,
    1953,
    'history',
    'English',
    2
  );
  ------autor-----
INSERT INTO
  autor (id, name, Bday)
VALUES(1, 'Jane Austen', 1775-06-29);
INSERT INTO
  autor (id, name, Bday)
VALUES(2, 'L. P. Hartley', 1935-08-12);
-----location-----
INSERT INTO
  location (id, floor, room, racks)
VALUES
  (1, 2, 312, '1-green');
INSERT INTO
  location (id, floor, room, racks)
VALUES
  (2, 2, 312, '3-red');
  ----autor_location-----
INSERT INTO
  autor_location (autor_id, location_id)
VALUES(1, 1);
INSERT INTO
  autor_location (autor_id, location_id)
VALUES(2, 2);