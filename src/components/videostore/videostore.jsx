import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import "./videostore.css"
import {VideoCard} from "./videocard"
const VideoStore = () => {
const[getVideo, setGetVideo] = useState([])
  useEffect (() => {
      const fetchData = async () => {
  const videoData = await axios.get("/api/videos")
   setGetVideo(videoData.data.videos)
      }
      fetchData();
  },[])
  
  return (
    <>
    <div className="videostore col-9">
        <p>Popular</p>
        <div className="videostore_container">
            {
                getVideo.map((item,index) => <VideoCard product = {item} index = {index}/>)
            }
        </div>

    </div>
    </>
  )
}

export {VideoStore}