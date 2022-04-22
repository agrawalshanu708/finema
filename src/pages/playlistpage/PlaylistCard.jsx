import React from 'react'
import { AiOutlineHeart, AiFillHeart,AiOutlineDelete,AiOutlineEdit } from "react-icons/ai";
import {
  MdOutlinePlaylistPlay,
  MdOutlineWatchLater,
  MdWatchLater,
} from "react-icons/md";
import axios from "axios";
import {useAuth,usePlaylist} from "../../context/index"
import { useNavigate } from "react-router-dom";
const PlaylistCard = ({playlist}) => {
const {auth :{token,isAuth}} = useAuth()
const { setPlaylists } = usePlaylist();
const navigate = useNavigate()
const deleltePlaylist = async (id) => {
    const header  = { authorization: token};
    const deleteLink = "/api/user/playlists/" + id;
    try {
        const response = await axios.delete(deleteLink,{headers : header})
        console.log(response)
        setPlaylists(response.data.playlists)
    } catch (error) {
        console.log(error)
    }
}
   return (
    <div
    class="border-skin text-overlay-card-dimension card-relative video-card"
    key={playlist._id}
  >
    <div
      class="text-overlay-card-img-box"
    >
      <img src="https://i.ytimg.com/vi/EK5Ua8qOLuo/hqdefault.jpg"
      onClick = {() => navigate(`/playlist/${playlist._id}`)}
      />
      
    </div>
    <div class="card-desc skin">
     {playlist.title}
    </div>
    <div class="card-footer-box card__icons">
      <AiOutlineEdit
        color="#AB542F"
        size="3rem"
      />
      <AiOutlineDelete
        color="#AB542F"
        size="3rem"
        onClick={() => deleltePlaylist(playlist._id)}
      />
    </div>
  </div>
  )
}
export {PlaylistCard}