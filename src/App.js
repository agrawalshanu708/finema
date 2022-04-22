import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import {Navbar,Searchbar} from "./components/index"
import {Home,LikePage,WatchLaterPage,HistoryPage,Playlist,Login,Signup,LandingPage} from "./pages/index"
import { VideosInPlaylist } from "./pages/playlistpage/videosInPlaylist";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    <Routes>
      <Route path="/videos" element = {<Home/>}/>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/like" element = {<LikePage/>}/>
      <Route path = "/watchlater" element = {<WatchLaterPage/>}/>
      <Route path = "/history" element = {<HistoryPage/>}/>
      <Route path = "/playlist" element = {<Playlist/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path="/playlist/:id" element={<VideosInPlaylist/>} />
    </Routes>
    </div>
  );
}

export default App;
