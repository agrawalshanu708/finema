import React from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"
import {useLike,useWatchLater} from "./../../context/index"
import {logo} from "./../../assets/index"
const Navbar = () => {
    const{likeState} = useLike()
    const{watchLaterState} = useWatchLater()
  return (
    <>
    <div className="navbar">
<Link to = "/"> <div className="navbar__logo">
    <div className="navbar__media">
        <img src={logo} alt="" />
    </div >
    <span className="navbar__logoname">Finema</span>
</div></Link>
<div className="navbar__genre">

<div className="navbar__badge">
<Link to = "/like"> <span className="navbar__text">Likes</span></Link>
<span className="navbar__badge_number navbar__text">{likeState.likeItems.length}</span>
</div>

<span className="navbar__text">History</span>


<div className="navbar__badge">
<span className="navbar__text">Playlist</span>
<span className="navbar__badge_number navbar__text">2</span>
</div>

<div className="navbar__badge">
<Link to = "/watchlater"><span className="navbar__text">Watch later</span></Link> 
<span className="navbar__badge_number navbar__text">{watchLaterState.watchLaterItems.length}</span>
</div>

</div>
<div className="navbar__profile">
    <span className="navbar__text">Login</span>
</div>
    </div>
    </>
  )
}

export { Navbar}