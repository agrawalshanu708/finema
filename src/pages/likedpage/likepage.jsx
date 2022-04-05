import React from "react";
import "./likepage.css";
import { useLike } from "./../../context/index";
import { LikeCard } from "./likecard";
const LikePage = () => {
  const { likeState } = useLike();

  return (
    <>
      <div className="likepage">
        {likeState.likeItems.map((item, index) => (
          <LikeCard product={item} index={index} />
        ))}
      </div>
    </>
  );
};

export { LikePage };
