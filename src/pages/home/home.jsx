import React from 'react'
import {VideoStore,Modal} from "./../../components/index"
import {usePlaylist} from "../../context/index"
const Home = () => {
const{openPlaylistModal} = usePlaylist()

  return (
    <>
    <div className="homepage col-11">
     
     <VideoStore/>
    </div>
    
    </>
  )
}

export { Home}