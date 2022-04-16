import React from "react";
import "./Modal.css";
import { logo } from "../../assets/index";
import { useState } from "react";
import { useAuth, usePlaylist } from "../../context/index";
import axios from "axios";
const Modal = ({setShowModal,video}) => {
  const [title, setTitle] = useState("");
  const {
    auth: { token },
  } = useAuth();

  const { playlists, setPlaylists} =
    usePlaylist();

  const header = { authorization: token };

  const createPlaylistHandler = async () => {
    const data = {
      title: title,
      description: "hello video",
    };

    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: data },
        { headers: header }
      );
      console.log(response);
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideoToPlaylist = async (video,id) => {
    const postLink = "/api/user/playlists/" + id;
    const sendVideo = {video: video}

    try {
      const response = await axios.post(postLink, sendVideo, {
        headers: header,
      });
      setPlaylists(response.data.playlist)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="playlistmodal-page">
      <div className="playlistModal">
        <p>Add this Video to a collection</p>
        <div className="hr"></div>

        <div action="" className="playlist__form">
          <div className="align__horizontal">
            <input
              type="text"
              id="playlist_name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="button primary_btn"
              onClick={() => createPlaylistHandler()}
            >
              +
            </button>
          </div>

          {playlists.length >= 0 &&
            playlists.map((playlist) => (
              <label key={playlist._id} className="playlist_name">
                <input
                  type="checkbox"
                  onChange={() => addVideoToPlaylist(video, playlist._id)}
                ></input>
                {playlist.title}
              </label>
            ))}
          <div className="align__horizontal">
            <button className="button primary_btn" type="submit" onClick = {() => setShowModal(false)}>
              Create Collection
            </button>
            <button className="button secondary_btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
