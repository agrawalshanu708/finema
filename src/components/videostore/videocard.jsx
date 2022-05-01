import { useState ,Fragment} from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  MdOutlinePlaylistPlay,
  MdOutlineWatchLater,
  MdWatchLater,
} from "react-icons/md";
import {
  useLike,
  useWatchLater,
  useHistory,
  useStore,
  usePlaylist,
  useAuth
} from "./../../context/index";
import { checkInArray } from "./../../utils/index";
import {Modal} from "../Modal/Modal"

const VideoCard = ({ product }) => {
  const { _id, title, charactor, description, modal } = product;
  const { likeState, likeDispatch } = useLike();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { historyState, historyDispatch } = useHistory();
  const [showModal, setShowModal] = useState(false);
  const{auth} = useAuth();
  const isHistoryItem = checkInArray(_id, historyState.historyItems);
  const historyHandler = (id, product) => {
    if(auth.token){
    if (!isHistoryItem) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: product,
      });
    }}else{
      alert("login")
    }
  };

  const isWatchItem = checkInArray(_id, watchLaterState.watchLaterItems);
  const watchlaterHandler = (id, product) => {
  if(auth.token){

    if (isWatchItem) {
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
  }else{
    alert("please login")
  }
  };

  const isLikeItem = checkInArray(_id, likeState.likeItems);
  const likeHandler = (id, product) => {
    if(auth.token){
    isLikeItem
      ? likeDispatch({
          type: "REMOVE_FROM_LIKE",
          payload: id,
        })
      : likeDispatch({
          type: "ADD_TO_LIKE",
          payload: product,
        });
      }else{
        alert("please login")
      }
  };

  return (
    <Fragment>
      {showModal && <Modal setShowModal={setShowModal} video={product}/>}
    <div
      class="border-skin text-overlay-card-dimension card-relative video-card"
      key={_id}
    >
      
      <div
        class="text-overlay-card-img-box"
        onClick={() => historyHandler(_id, product)}
      >
        <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
      </div>
      {/* <div class="card-head head-overflow">{title}</div> */}
      <div class="card-tag tag-overflow ">{charactor}</div>
      <div class="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest changes
        today
      </div>
      <div class="card-footer-box card__icons">
        {isLikeItem ? (
          <AiFillHeart
            color="#AB542F"
            size="3rem"
            onClick={() => likeHandler(_id, product)}
          />
        ) : ( 
          <AiOutlineHeart
            color="#AB542F"
            size="3rem"
            onClick={() => likeHandler(_id, product)}
          />
        )}

        <MdOutlinePlaylistPlay
          color="#AB542F"
          size="3rem"
          onClick={() => {
            if(auth.token){
              setShowModal(true)
            }else{
           alert("please login")
            }
          }}
           
        />
        <MdOutlineWatchLater
          color="#AB542F"
          size="3rem"
          onClick={() => {
            watchlaterHandler(_id, product);
          }}
        />
      </div>
    </div>
    </Fragment> );
};

export { VideoCard };
