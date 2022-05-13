import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useLike, useWatchLater, useHistory,useAuth,usePlaylist} from "./../../context/index";
import { logo } from "./../../assets/index";
import { toast } from "react-toastify";
const Navbar = () => {
  const { likeState } = useLike();
  const { watchLaterState } = useWatchLater();
 const{auth,setAuth} = useAuth();
  const{playlists} = usePlaylist()

const clickHandler = () => {
  if(!auth.isAuth){
   toast.error("Login First")
  }
}

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="navbar__logo">
            <div className="navbar__media">
              <img src={logo} alt="" />
            </div>
            <span className="navbar__logoname">Finema</span>
          </div>
        </Link>

        <div className="navbar__genre">
          <div class="navbar__badge">
            <Link to="/like" class="navbar__text" onClick = {clickHandler}>
              Likes
            </Link>
            <span class="navbar__badge_number navbar__text">
              {likeState.likeItems.length}
            </span>
          </div>

          <Link to="/history">
            <span className="navbar__text" onClick = {clickHandler}>History</span>
          </Link>

          <div className="navbar__badge">
            <Link to="/playlist">
              <span className="navbar__text" onClick = {clickHandler}>Playlist</span>
            </Link>
            <span className="navbar__badge_number navbar__text">{playlists.length}</span>
          </div>

          <div className="navbar__badge">
            <Link to="/watchlater">
              <span className="navbar__text" onClick = {clickHandler}>Watch later</span>
            </Link>
            <span className="navbar__badge_number navbar__text">
              {watchLaterState.watchLaterItems.length}
            </span>
          </div>
        </div>
        <div className="navbar__profile__box">
        <p style = {{color: "#AB542F"}}>Hi, {auth.isAuth? auth.userName: "User"}</p>
        <div className="navbar__profile">
          <Link to="./login">
            <span onClick = {() => { 
              if(auth.token){
                setAuth(auth => ({...auth,token: "",userName: "User"}))
                toast.success("Logout Successfully")
            }}} className="navbar__text">{auth.token ?"Logout":"Login"}</span>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
