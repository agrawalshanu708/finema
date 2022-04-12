import React from "react";
import "./Modal.css";
import { logo } from "../../assets/index";
import { useState } from "react";
const Modal = () => {
  const [title,setTitle] = useState([])
  return (
    <div className="playlistmodal-page">
      <div className="playlistModal">
        <p>Add this Video to a collection</p>
        <div className="hr"></div>

        <form action="" className="playlist__form">
          <div className="align__horizontal">
            <input type="text" id="playlist_name" onChange = {(e) => setTitle(e.target.value)} />
            <button className="button primary_btn">+</button>
          </div>
          <div className="align__horizontal">
            <button className="button primary_btn" type="submit">
              Create Collection
            </button>
            <button className="button secondary_btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Modal };
