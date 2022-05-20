import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import { landing1 } from "../../assets/index";
const LandingPage = () => {
  return (
    <div className="banner-boxy">
      <div className="banner-text">
        <div className="banner-heading">
          <span className="banner-design-text">
            Think fast, go farther with our simple solutions to
            <span className="finance-text"> finance</span>
          </span>
        </div>
        <Link to="/videos">
          <button className="explore-btn btn">Explore</button>
        </Link>
      </div>
      <div className="banner-images">
        <img src={landing1} alt="" />
      </div>
    </div>
  );
};

export { LandingPage };
