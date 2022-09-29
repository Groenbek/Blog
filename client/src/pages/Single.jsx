import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Edit from "../img/Edit.png";
import Delete from "../img/Delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1200px-Phat_Thai_kung_Chang_Khien_street_stall.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://billedbladet-prod.imgix.net/s3fs-public/media/article/aaa.jpg?ixlib=imgixjs-3.4.0"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Open the settings of your VS Code.</h1>
        <p>
          You can do this on Windows by pressing both Ctrl and ,. Click on the
          formatting section of the Text Editor tab and enable Format on Save
          Mode. Ace your System Design Interview and take your career to the
          next level. Learn to handle the design of applications like Netflix,
          Quora, Facebook, Uber, and many more in a 45-min interview. Learn the
          RESHADED framework for architecting web-scale applications by
          determining requirements, constraints, and assumptions before diving
          into a step-by-step design process.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
