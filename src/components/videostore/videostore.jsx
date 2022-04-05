import React from 'react'
import "./videostore.css"
import {VideoCard} from "./videocard"
import {useStore} from "../../context/index"
const VideoStore = () => {
const{storeState} = useStore()
console.log(storeState.storeItems);

  return (
    <>
    <div className="videostore col-10">
        <p>Popular</p>
        <div className="videostore_container">
            {
               storeState.storeItems.map(product => <VideoCard product = {product}/>)
            }
        </div>

    </div>
    </>
  )
}

export {VideoStore}