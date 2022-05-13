import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";
const Error404 = () => {
  return (
    <div className="error__box">
      <h1>Opps! Page Not Found</h1>
      <p className="error__p">
        You must have picked the wrong door because I haven't been able to lay
        my eye on the page you've been searching for.
      </p>
      <Link to="/">
        <button className="btn">Back TO Home</button>
      </Link>
    </div>
  );
};

export { Error404 };
