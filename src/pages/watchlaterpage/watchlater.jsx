import React from 'react'
import "./watchlater.css"
import {useWatchLater} from "./../../context/index"
import {WatchLaterCard} from "./watchlatercard"

const WatchLaterPage = () => {
    const{watchLaterState} = useWatchLater()
  return (
    <>
    <div className="watchlaterpage">
        {
 watchLaterState.watchLaterItems.map((item,index) => <WatchLaterCard product = {item} index = {index}/>)
        }
    </div>
    </>
  )
}

export {WatchLaterPage}