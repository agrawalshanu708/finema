import { useState ,Fragment} from "react";
import { useNavigate } from "react-router-dom";
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
  useAuth
} from "./../../context/index";
import { checkInArray } from "./../../utils/index";
import {Modal} from "../Modal/Modal"
import { toast } from "react-toastify";

const VideoCard = ({ product }) => {
  const { _id, title, charactor, description, modal } = product;
  const { likeState, likeDispatch } = useLike();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { historyState, historyDispatch } = useHistory();
  const [showModal, setShowModal] = useState(false);
  const{auth} = useAuth();
  const navigate = useNavigate();
  const isHistoryItem = checkInArray(_id, historyState.historyItems);
  const historyHandler = (id, product) => {
    if(auth.token){
    if (!isHistoryItem) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: product,
      });
    }}else{
      toast.error("please Login First")
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
    toast.error("please Login First")

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
        toast.error("please Login First")
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
        onClick={() => {
          historyHandler(_id, product)
         navigate(`/video/${_id}`)
        }}
      >
        <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
      </div>
      {/* <div class="card-head head-overflow">{title}</div> */}
      <div class="card-character">{charactor}</div>
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
              toast.error("please Login First")

            }
          }}
           
        />
        {isWatchItem? <MdWatchLater
          color="#AB542F"
          size="3rem"
          onClick={() => {
            watchlaterHandler(_id, product);
          }}
        /> : <MdOutlineWatchLater
          color="#AB542F"
          size="3rem"
          onClick={() => {
            watchlaterHandler(_id, product);
          }}
        />}
      </div>
    </div>
    </Fragment> );
};

export { VideoCard };
