import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  LikeProvider,
  WatchLaterProvider,
  HistoryProvider,
  StoreProvider,
  FilterProvider,
  PlaylistProvider,
  AuthProvider
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <PlaylistProvider>
      <FilterProvider>
        <StoreProvider>
          <LikeProvider>
            <WatchLaterProvider>
              <HistoryProvider>
                <App />
              </HistoryProvider>
            </WatchLaterProvider>
          </LikeProvider>
        </StoreProvider>
      </FilterProvider>
      </PlaylistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
