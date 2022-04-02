import React from 'react'
import "./history.css"
import {HistoryCard} from"./historycard"
import {useHistory} from "./../../context/index"
const HistoryPage = () => {
    const{historyState} = useHistory()
  return (
    <div className="historypage">
    {
historyState.historyItems.map((item,index) => <HistoryCard product = {item} index = {index}/>)
    }
</div>
  )
}

export {HistoryPage}