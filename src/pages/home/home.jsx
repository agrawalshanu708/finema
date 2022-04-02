import React from 'react'
import {VideoStore,AddedVideo} from "./../../components/index"
const Home = () => {
  return (

    <>
    <div className="homepage col-11">
        <VideoStore/>
        <AddedVideo/>
    </div>
    
    </>
  )
}

export { Home}