import React from "react";
import "./searchbar.css";
import { useFilter } from "../../context/index";
const Searchbar = () => {
  const { filterDispatch } = useFilter();
  return (
    <>
      <div className="searchbar">
        <div className="searchbar__category">
          <span
            onClick={() =>
              filterDispatch({
                type: "FILTER_BY",
                payload: "all",
              })
            }
          >
            Explore
          </span>
          <span
            onClick={() =>
              filterDispatch({
                type: "FILTER_BY",
                payload: "talk",
              })
            }
          >
            Talks
          </span>
          <span
            onClick={() =>
              filterDispatch({
                type: "FILTER_BY",
                payload: "stock",
              })
            }
          >
            Stock Market
          </span>
          <span
            onClick={() =>
              filterDispatch({
                type: "FILTER_BY",
                payload: "finance",
              })
            }
          >
            Finance
          </span>
          <span
            onClick={() =>
              filterDispatch({
                type: "FILTER_BY",
                payload: "crypto",
              })
            }
          >
            Crypto
          </span>
        </div>
        <div className="searchbar__input">
          <input type="text" />
          <button className="button primary_btn">Search</button>
        </div>
      </div>
    </>
  );
};

export { Searchbar };
