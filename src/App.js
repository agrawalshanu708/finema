import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import {Navbar,Searchbar,RequireAuth,PlainNav} from "./components/index"
import {Home,LikePage,WatchLaterPage,HistoryPage,Playlist,Login,Signup,LandingPage, Error404, SingleVideo} from "./pages/index"
import { VideosInPlaylist } from "./pages/playlistpage/videosInPlaylist";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
    {pathname === "/login" || pathname === "/signup" ? (
        <PlainNav />
      ): (
        <Navbar />
      )}
      <Searchbar/>
    <Routes>
      <Route path = "*" element = {<Error404/>}/>
      <Route path="/videos" element = {<Home/>}/>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/video/:videoId" element = {<SingleVideo/>}/>
      <Route path = "/like" element = {
      <RequireAuth>
      <LikePage/>
      </RequireAuth>
      }/>
      <Route path = "/watchlater" element = {
      <RequireAuth>
      <WatchLaterPage/>
      </RequireAuth>
      }/>
      <Route path = "/history" element = {
      <RequireAuth>
      <HistoryPage/>
      </RequireAuth>
      }/>
      <Route path = "/playlist" element = {
      <RequireAuth>
      <Playlist/>
      </RequireAuth>
      }/>
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
