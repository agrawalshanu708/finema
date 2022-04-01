import React from 'react'
import {VideoStore,AddedVideo} from "./../../components/index"
const Home = () => {
  return (
    <>
    <div className="home">
        <VideoStore/>
        <AddedVideo/>
    </div>
    
    </>
  )
}

export { Home}