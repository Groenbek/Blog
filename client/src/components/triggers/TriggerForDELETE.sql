DELIMITER $$
CREATE TRIGGER delete_post
AFTER DELETE
ON posts
FOR EACH ROW
BEGIN
  INSERT INTO log_table (log_message)
  VALUES ('A post was deleted in the posts table');
END$$
DELIMITER ;
