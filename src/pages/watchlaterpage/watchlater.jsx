import React from 'react'
import "./watchlater.css"
import {useWatchLater,usePlaylist} from "./../../context/index"
import {WatchLaterCard} from "./watchlatercard"
import {Modal} from "../../components/index"
const WatchLaterPage = () => {
    const{watchLaterState} = useWatchLater()
    const{openPlaylistModal} = usePlaylist()
  return (
    <>
    <div className="watchlaterpage">
      {openPlaylistModal && <Modal/>}
        {
 watchLaterState.watchLaterItems.map((item,index) => <WatchLaterCard product = {item} index = {index}/>)
        }
    </div>
    </>
  )
}

export {WatchLaterPage}