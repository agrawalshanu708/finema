import { useState} from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlinePlaylistPlay, MdOutlineWatchLater,MdWatchLater } from "react-icons/md"
import { useLike, useWatchLater, useHistory } from "./../../context/index"
import{checkInArray} from "./../../utils/index"
const VideoCard = ({ product, index }) => {

  const { _id, title, description, charactor } = product
  const { likeState, likeDispatch } = useLike()
  const { watchLaterState, watchLaterDispatch } = useWatchLater()
  const { historyDispatch } = useHistory()




const isWatchItem = checkInArray(_id,watchLaterState.watchLaterItems)
const watchlaterHandler = (id,product) => {
  if(isWatchItem){
    watchLaterDispatch({
    type:"REMOVE_FROM_WATCH_LATER",
    payload: id
  })
  }else{
    watchLaterDispatch({ 
            type:"ADD_TO_WATCH_LATER",
            payload : product
          })
  }
}
 
const isLikeItem = checkInArray(_id,likeState.likeItems)
const likeHandler = ( id,product) => {
 isLikeItem ?  likeDispatch({
   type:"REMOVE_FROM_LIKE",
   payload: id
   }) :  likeDispatch({
     type:"ADD_TO_LIKE",
     payload: product
     })
} 
  return (

    <div class="border-skin text-overlay-card-dimension card-relative video-card">
      <div class="text-overlay-card-img-box" onClick={() => historyDispatch({
        type: "ADD_IN_HISTORY",
        payload: product
      })}>
        <img
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
        />
      </div>
      {/* <div class="card-head head-overflow">{title}</div> */}
      <div class="card-tag tag-overflow ">{charactor}</div>
      <div class="card-desc skin">
        Visit ten places on our planet that are undergoing the biggest
        changes today</div>
      <div class="card-footer-box card__icons">
        <AiOutlineHeart color="#AB542F" size="3rem" onClick={() => likeHandler(_id,product)} />
        <MdOutlinePlaylistPlay color="#ffff" size="4rem" />
        <MdOutlineWatchLater color="#AB542F" size="3rem"  onClick={() =>  {
          watchlaterHandler(_id,product)}}/>   
      </div>
    </div>
  )
}

export { VideoCard }