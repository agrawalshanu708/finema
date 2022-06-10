import React from "react";
import "./navbar.css";
import {logo} from "../../assets/index";
import {Link} from "react-router-dom"
const PlainNav = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__logo">
          <div className="navbar__media">
            <img src={logo} alt="" />
          </div>
          <span className="navbar__logoname">Finema</span>
        </div>
      </Link>
    </div>
  );
};

export { PlainNav };
