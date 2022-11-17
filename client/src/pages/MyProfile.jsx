import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const MyProfile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <div>
        Hello {currentUser?.username}! <br></br>Great to see you!
      </div>
      <div>
        Would you like to see some of your posts? Well, look no further!{" "}
      </div>
      <div></div>
    </div>
  );
};

export default MyProfile;
{
  /* <div> {currentUser.username === post.username && (
    <div className="edit">
      <Link to={`/write?edit=2`} state={post}>
        <img src={Edit} alt="" />
      </Link>
      <img onClick={handleDelete} src={Delete} alt="" />
    </div>
</div> */
}
