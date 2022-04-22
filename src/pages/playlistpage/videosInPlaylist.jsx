import React from "react";
import { usePlaylist } from "../../context";
import { useParams } from "react-router-dom";
import "./playlist.css"
import { VideoCard } from "../../components/videostore/videocard";
const VideosInPlaylist = () => {
  const { playlists } = usePlaylist();
  const { id } = useParams();
  console.log(id);
  console.log(playlists);
  const playlistToRender = playlists.find((obj) => obj._id === id);
  console.log(playlistToRender);
  return (
    <>
      <div className="video_in_playlist__page">
        {id &&
          playlistToRender.videos.map((product) => <VideoCard product={product} />)}
      </div>
    </>
  );
};

export { VideosInPlaylist };
