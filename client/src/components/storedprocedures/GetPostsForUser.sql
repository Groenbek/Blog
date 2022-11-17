DELIMITER //

CREATE PROCEDURE GetPostsForUser()
BEGIN
	SELECT * posts FROM post WHERE uid == {currentUser.id};
END//

DELIMITER ;

CALL GetAllPosts();