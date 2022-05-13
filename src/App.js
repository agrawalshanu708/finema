import "./App.css";
import { Routes, Route} from "react-router-dom";
import {Navbar,Searchbar} from "./components/index"
import {Home,LikePage,WatchLaterPage,HistoryPage,Playlist,Login,Signup,LandingPage} from "./pages/index"
import { VideosInPlaylist } from "./pages/playlistpage/videosInPlaylist";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover

/>
    </div>
  );
}

export default App;
