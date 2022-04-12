import React from 'react'
import "./history.css"
import {HistoryCard} from"./historycard"
import {useHistory,usePlaylist} from "./../../context/index"
import {Modal} from "../../components/index"
const HistoryPage = () => {
    const{historyState} = useHistory()
     const{openPlaylistModal} =   usePlaylist()
  return (
    <div className="historypage">
      {openPlaylistModal && <Modal/>}
    {
historyState.historyItems.map((item,index) => <HistoryCard product = {item} index = {index}/>)
    }
</div>
  )
}

export {HistoryPage}