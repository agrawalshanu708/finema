import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { LikeProvider,WatchLaterProvider,HistoryProvider} from "./context/index";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LikeProvider>
      <WatchLaterProvider>
        <HistoryProvider>
    <App />
    </HistoryProvider>
    </WatchLaterProvider>
    </LikeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
