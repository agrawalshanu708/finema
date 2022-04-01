import React from 'react'
import "./navbar.css"
import {logo} from "./../../assets/index"
const Navbar = () => {
  return (
    <>
    <div className="navbar">
<div className="navbar__logo">
    <div className="navbar__media">
        <img src={logo} alt="" />
    </div>
    <span>Finema</span>
</div>
<div className="navbar__genre">
    <span className="navbar__text">Likes</span>
    <span className="navbar__text">History</span>
    <span className="navbar__text">Playlist</span>
    <span className="navbar__text">Watch Later</span>
</div>
<div className="navbar__profile">
    <span className="navbar__text">Login</span>
</div>
    </div>
    </>
  )
}

export { Navbar}