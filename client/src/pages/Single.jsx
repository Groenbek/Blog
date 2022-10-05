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
          src="https://www.nationalreview.com/wp-content/uploads/2022/09/navy-seal-training-coronado-1.jpg?fit=2057%2C1200"
          alt=""
        />
        <div className="user">
          <img
            src="https://billedbladet-prod.imgix.net/s3fs-public/media/article/aaa.jpg?ixlib=imgixjs-3.4.0"
            alt=""
          />
          <div className="info">
            <span>Loglover John</span>
            <p>Posted 1 day ago</p>
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
          I'll have you know I graduated top of my class in the Navy Seals, and
          I've been involved in numerous secret raids on Al-Quaeda, and I have
          over 300 confirmed kills. I am trained in gorilla warfare and I'm the
          top sniper in the entire US armed forces. You are nothing to me but
          just another target. I will wipe you the fuck out with precision the
          likes of which has never been seen before on this Earth, mark my
          fucking words. You think you can get away with saying that shit to me
          over the Internet? Think again, fucker. As we speak I am contacting my
          secret network of spies across the USA and your IP is being traced
          right now so you better prepare for the storm, maggot. The storm that
          wipes out the pathetic little thing you call your life. You're fucking
          dead, kid. I can be anywhere, anytime, and I can kill you in over
          seven hundred ways, and that's just with my bare hands. Not only am I
          extensively trained in unarmed combat, but I have access to the entire
          arsenal of the United States Marine Corps and I will use it to its
          full extent to wipe your miserable ass off the face of the continent,
          you little shit. If only you could have known what unholy retribution
          your little "clever" comment was about to bring down upon you, maybe
          you would have held your fucking tongue. But you couldn't, you didn't,
          and now you're paying the price, you goddamn idiot. I will shit fury
          all over you and you will drown in it. You're fucking dead, kiddo.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
