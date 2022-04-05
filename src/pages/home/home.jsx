import React from 'react'
import {VideoStore,AddedVideo,Modal} from "./../../components/index"
import {useStore} from "../../context/index"
const Home = () => {

 const{storeState} = useStore()

  return (

    <>
    <div className="homepage col-11">
    {storeState.modal && <Modal/>}
        <VideoStore/>
        <AddedVideo/>
    </div>
    
    </>
  )
}

export { Home}