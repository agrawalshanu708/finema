import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import {Navbar,Searchbar} from "./components/index"
import {Home,LikePage,WatchLaterPage,HistoryPage} from "./pages/index"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path = "/like" element = {<LikePage/>}/>
      <Route path = "/watchlater" element = {<WatchLaterPage/>}/>
      <Route path = "/history" element = {<HistoryPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
