import React from "react";
import "./likepage.css";
import { useLike,usePlaylist } from "./../../context/index";
import { LikeCard } from "./likecard";
import {Modal} from "../../components/index"
const LikePage = () => {
  const { likeState } = useLike();
  const {openPlaylistModal} = usePlaylist();
  return (
    <>
      <div className="likepage">]
      {openPlaylistModal && <Modal/>}
        {likeState.likeItems.map((item, index) => (
          <LikeCard product={item} index={index} />
        ))}
      </div>
    </>
  );
};

export { LikePage };
