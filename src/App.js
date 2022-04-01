import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import {Navbar} from "./components/index"
import {Searchbar} from "./components/index"
import {Home,LikePage,WatchLaterPage} from "./pages/index"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path = "/like" element = {<LikePage/>}/>
      <Route path = "/watchlater" element = {<WatchLaterPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
