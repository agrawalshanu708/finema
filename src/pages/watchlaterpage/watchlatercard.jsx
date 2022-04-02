import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {MdOutlinePlaylistPlay} from "react-icons/md"
import {MdOutlineWatchLater} from"react-icons/md"
import {useWatchLater} from "./../../context/index"
const WatchLaterCard = ({product,index}) => {
    const{_id,title,description,charactor} = product
    const{watchlaterDispatch} = useWatchLater()

    return (
    <div class="border-skin text-overlay-card-dimension card-relative video-card" key = {index}>
    <div class="text-overlay-card-img-box">
      <img
      src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
    />
    </div>
    {/* <div class="card-head head-overflow">{title}</div> */}
    <div class="card-tag tag-overflow ">{charactor}</div>
    <div class="card-desc skin">
      Visit ten places on our planet that are undergoing the biggest
      changes today</div>
    <div class="card-footer-box card__icons">
      <AiOutlineHeart color = "#AB542F" size="3rem" onClick = {() => watchlaterDispatch({
        type:"REMOVE_FROM_LIKE",
        payload: index
        })}/>
      <MdOutlinePlaylistPlay color= "#ffff" size="4rem"/>
      <MdOutlineWatchLater color= "#ffff" size="3rem"/>
      </div>
      </div>
  )
}

export {WatchLaterCard}