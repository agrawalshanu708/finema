import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {MdOutlinePlaylistPlay,MdOutlineWatchLater} from "react-icons/md"
import {useLike,useWatchLater} from "./../../context/index"
import { checkInWatch } from '../../utils/index'

const LikeCard = ({product,index}) => {
    const{_id,title,description,charactor} = product
    const{likeDispatch} = useLike()
    const{ watchLaterState ,watchLaterDispatch} = useWatchLater()
  
    const isItem = checkInWatch(_id,watchLaterState.watchLaterItems)
    const watchLaterHandler = (id,product) => {
      if(isItem){
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
      <AiOutlineHeart color = "#AB542F" size="3rem" onClick = {() => likeDispatch({ 
        type :"REMOVE_FROM_LIKE",
        payload: _id
      })}/>
      <MdOutlinePlaylistPlay color= "#ffff" size="4rem"/>
      <MdOutlineWatchLater color= "#ffff" size="3rem" onClick = {() => watchLaterHandler(_id,product)}/>
      </div>
      </div>
  )
}

export {LikeCard}