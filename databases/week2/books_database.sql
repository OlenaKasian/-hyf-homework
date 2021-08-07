CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `pages` varchar(255) NOT NULL,
  `publication` varchar(255) NULL,
  `genres` varchar(255) NULL,
  `languages` varchar(255) NULL,
  `autor_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_autor` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `autor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `Bday` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `situated` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `floor` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `racks` varchar(255) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `autor_situated` (
  `autor_id` int(10) unsigned NOT NULL,
  `situated_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`autor_id`, `situated_id`),
  CONSTRAINT `fk_autor_situated_autor` FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_autor_situated_situated` FOREIGN KEY (`situated_id`) REFERENCES `situated` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
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
VALUES(1, 'Jane Austen', 1775);
INSERT INTO
  autor (id, name, Bday)
VALUES(2, 'L. P. Hartley', 1935);
-----situated-----
INSERT INTO
  situated (id, floor, room, racks)
VALUES
  (1, 2, 312, 1);
INSERT INTO
  situated (id, floor, room, racks)
VALUES
  (2, 2, 312, 3);
  ----autor_situated-----
INSERT INTO
  autor_situated (autor_id, situated_id)
VALUES(1, 1);
INSERT INTO
  autor_situated (autor_id, situated_id)
VALUES(2, 2);