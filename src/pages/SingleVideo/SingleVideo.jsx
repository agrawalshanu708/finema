import React from "react";
import { useParams } from "react-router-dom";
import { useAuth, useLike, useStore, useWatchLater } from "../../context";
import "./SingleVideo.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  MdOutlinePlaylistPlay,
  MdOutlineWatchLater,
  MdWatchLater,
} from "react-icons/md";
import { checkInArray } from "../../utils";
import { toast } from "react-toastify";
import { useState } from "react";
import {Modal} from "../../components/index"

const SingleVideo = () => {
  const [showModal, setShowModal] = useState(false);

  const { videoId } = useParams();
  const { storeState } = useStore();
  const video = storeState.storeItems.find((el) => el._id === videoId);
  console.log(video);

  const { auth } = useAuth();
  const { likeState, likeDispatch } = useLike();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();

  const isLikeItem = checkInArray(videoId, likeState.likeItems);
  const likeHander = () => {
    if (auth.token) {
      isLikeItem
        ? likeDispatch({ type: "REMOVE_FROM_LIKE", paylod: videoId})
        : likeDispatch({ type: "ADD_TO_LIKE",payload: video });
    } else {
      toast.error("please login first");
    }
  };

  const isWatchItem = checkInArray(videoId, watchLaterState.watchLaterItems);

const watchLaterHandler = () => {
  if (auth.token) {
    isWatchItem
      ? watchLaterDispatch({ type: "REMOVE_FROM_WATCH_LATER", paylod: videoId})
      : watchLaterDispatch({ type: "ADD_TO_WATCH_LATER",payload: video });
  } else {
    toast.error("please login first");
  }
}
  return (
    <>
  {showModal && <Modal setShowModal={setShowModal} video={video}/>}
    <div className="flex-centred">
      <iframe
        className="video"
        src={`https://www.youtube.com/embed/${video.iframeId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="video-details flex-col">
        <div className="text-head">{video.charactor}</div>
        <div className="text-body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          quasi recusandae animi delectus. Dolorum illum perspiciatis numquam.
          Vel, a iste.
        </div>
      </div>
      <div className="icons-box flex-row flex-center">
        
        {
          isLikeItem ?  <AiFillHeart color="#AB542F" size="3.5rem" onClick={likeHander} />:
          <AiOutlineHeart color="#AB542F" size="3.5rem" onClick={likeHander} />
        }
        <MdOutlinePlaylistPlay
          color="#AB542F"
          size="3.5rem"
          onClick={() => {
            if(auth.token){
              setShowModal(true)
            }else{
              toast.error("please Login First")

            }
          }}
        />
        { isWatchItem ? <MdWatchLater color="#AB542F" size="3.5rem" onClick = {watchLaterHandler}/> :
          <MdOutlineWatchLater color="#AB542F" size="3.5rem" onClick = {watchLaterHandler}/>}
      </div>
    </div>
    </>
  );
};

export { SingleVideo };
