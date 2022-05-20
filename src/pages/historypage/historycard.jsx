import React from 'react'
import {AiOutlineHeart,AiOutlineClose} from "react-icons/ai"
import {MdOutlinePlaylistPlay,MdOutlineWatchLater} from "react-icons/md"
import {useHistory,usePlaylist} from "./../../context/index"
const HistoryCard = ({product,index}) => {
    const{historyDispatch} = useHistory()
    const{_id,title,description,charactor} = product
    const{ openPlaylistModal,setOpenPlaylistModal} = usePlaylist();

  return (
<div class="border-skin text-overlay-card-dimension card-relative video-card" key = {index}>
    <div class="text-overlay-card-img-box">
      <img
      src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} class="history_media"
    />
    </div>
    {/* <div class="card-head head-overflow">{title}</div> */}
    <AiOutlineClose color="#AB542F" size="4rem" class="card_close"
    onClick = {() => historyDispatch({
      type: "REMOVE_FROM_HISTORY",
      payload: _id
    })}/>
    <div class="card-tag tag-overflow ">{charactor}</div>
    <div class="card-desc skin">
      Visit ten places on our planet that are undergoing the biggest
      changes today</div>
    <div class="card-footer-box card__icons">
      <AiOutlineHeart  color="#AB542F" size="4rem"/>
      <MdOutlinePlaylistPlay color="#AB542F" size="3rem" onClick={() => setOpenPlaylistModal(!openPlaylistModal)} />

      <MdOutlineWatchLater color="#AB542F" size="3rem"/>
      </div>
      </div>
  )
}

export  {HistoryCard}