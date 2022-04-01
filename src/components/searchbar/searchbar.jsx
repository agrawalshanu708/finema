import React from 'react'
import "./searchbar.css"
const Searchbar = () => {
  return (
    <>
    <div className="searchbar">
        <div className="searchbar__category">
            <span>Talks</span>
            <span>Investment</span>
            <span>Finance</span>
            <span>Crypto</span>
            <span>More</span>
        </div>
        <div className="searchbar__input"> 
        <input type="text" />
        <button className="btn btn-primary">Search</button>
        </div>
    </div>
    </>
  )
}

export {Searchbar}