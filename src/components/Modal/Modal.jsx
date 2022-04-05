import React from 'react'
import "./Modal.css"
import {logo} from "../../assets/index"
import {useState} from "react"
 const Modal = () => {

  return (
    <div className="playlistmodal-page">
   <div className="playlistModal">
   <p>Add this Video to a collection</p>
    <div className="hr"></div>  
    
    <form action="" className="playlist__form">
     <div className="align__vertical">
    <label htmlFor="playlist_name" className="playlist__form__label">Name</label>
    <input type="text" id="playlist_name"/>
    </div> 
    <div className="align__vertical">
    <label htmlFor="playlist__desc" className="playlist__form__label">Description</label>
    <textArea id="playlist__desc" className="playlist__form__textarea"></textArea>
    </div>
    <div className="align__horizontal">
      <button className="button primary_btn" type="submit">Create Collection</button>
      <button className="button secondary_btn">Cancel</button>
      </div>
    </form>


   </div>

</div>
  )
}

export {Modal}