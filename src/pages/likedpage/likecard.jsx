import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePlaylistPlay, MdOutlineWatchLater } from "react-icons/md";
import {
  useLike,
  useWatchLater,
  useHistory,
  useStore,
} from "./../../context/index";
import { checkInArray } from "../../utils/index";

const LikeCard = ({ product, index }) => {
  const { _id, title, charactor, description, modal } = product;

  const { likeDispatch } = useLike();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { historyState, historyDispatch } = useHistory();
  const { storeDispatch } = useStore();

  const isHistoryItem = checkInArray(_id, historyState.historyItems);
  const historyHandler = (id, product) => {
    if (!isHistoryItem) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: product,
      });
    }
  };

  const isItem = checkInArray(_id, watchLaterState.watchLaterItems);
  const watchLaterHandler = (id, product) => {
    if (isItem) {
      watchLaterDispatch({
        type: "REMOVE_FROM_WATCH_LATER",
        payload: id,
      });
    } else {
      watchLaterDispatch({
        type: "ADD_TO_WATCH_LATER",
        payload: product,
      });
    }
  };

  return (
    <div
      class="border-skin text-overlay-card-dimension card-relative video-card"
      key={index}
    >
      <div
        class="text-overlay-card-img-box"
        onClick={() => historyHandler(_id, product)}
      >
        <img src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} />
      </div>
      {/* <div class="card-head head-overflow">{title}</div> */}
      <div class="card-tag tag-overflow ">{charactor}</div>
      <div class="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest changes
        today
      </div>
      <div class="card-footer-box card__icons">
        <AiOutlineHeart
          color="#AB542F"
          size="3rem"
          onClick={() =>
            likeDispatch({
              type: "REMOVE_FROM_LIKE",
              payload: _id,
            })
          }
        />
        <MdOutlinePlaylistPlay
          color="#ffff"
          size="4rem"
          onClick={() =>
            storeDispatch({
              type: "SMALL_MODAL",
              payload: _id,
            })
          }
        />
        <MdOutlineWatchLater
          color="#ffff"
          size="3rem"
          onClick={() => watchLaterHandler(_id, product)}
        />
      </div>

      {modal && (
        <div className="card__modal">
          <span>Talks</span>
          <span>Business</span>
          <span>watchlater</span>

          <span
            onClick={() =>
              storeDispatch({
                type: "MODAL",
              })
            }
          >
            Create playlist +
          </span>
        </div>
      )}
    </div>
  );
};

export { LikeCard };
