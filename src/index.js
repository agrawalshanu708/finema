import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { LikeProvider } from "./context/likecontext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LikeProvider>
    <App />
    </LikeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
