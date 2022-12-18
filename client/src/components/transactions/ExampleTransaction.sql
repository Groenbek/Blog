START TRANSACTION;

UPDATE users SET name = CONCAT(name, 'Q');

UPDATE users SET name = REPLACE(name, 'Q', '');

COMMIT;
