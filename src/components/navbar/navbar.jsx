import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useLike, useWatchLater, useHistory,useAuth,usePlaylist} from "./../../context/index";
import { logo } from "./../../assets/index";
const Navbar = () => {
  const { likeState } = useLike();
  const { watchLaterState } = useWatchLater();
  const { historyState } = useHistory();
  const{auth,setAuth} = useAuth();
  const{playlists} = usePlaylist()
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
            <Link to="/like" class="navbar__text">
              Likes
            </Link>
            <span class="navbar__badge_number navbar__text">
              {likeState.likeItems.length}
            </span>
          </div>

          <Link to="/history">
            <span className="navbar__text">History</span>
          </Link>

          <div className="navbar__badge">
            <Link to="/playlist">
              <span className="navbar__text">Playlist</span>
            </Link>
            <span className="navbar__badge_number navbar__text">{playlists.length}</span>
          </div>

          <div className="navbar__badge">
            <Link to="/watchlater">
              <span className="navbar__text">Watch later</span>
            </Link>
            <span className="navbar__badge_number navbar__text">
              {watchLaterState.watchLaterItems.length}
            </span>
          </div>
        </div>
        <div className="navbar__profile__box">
        <p>Hi, {auth.isAuth? auth.userName: "User"}</p>
        <div className="navbar__profile">
          <Link to="./login">
            <span onClick = {() => { 
              auth.token && setAuth(auth => ({...auth,token: ""}))
            }} className="navbar__text">{auth.token ?"Logout":"Login"}</span>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
