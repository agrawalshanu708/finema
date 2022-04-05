import React from "react";
import "./videostore.css";
import { VideoCard } from "./videocard";
import { useStore, useFilter } from "../../context/index";
import { filterByCategory } from "../../utils";
const VideoStore = () => {
  const { storeState } = useStore();
  const { filterState } = useFilter();

  const finalItems = filterByCategory(
    storeState.storeItems,
    filterState.filterBy
  );

  return (
    <>
      <p>Popular</p>
      <div className="videostore_container col-12">
        {finalItems.map((product) => (
          <VideoCard product={product} />
        ))}
      </div>
    </>
  );
};

export { VideoStore };
