import "./App.css";
import logo from "./logo.png";
import { Routes, Route, Link } from "react-router-dom";
import {Navbar} from "./components/index"
import {Searchbar} from "./components/index"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    </div>
  );
}

export default App;
