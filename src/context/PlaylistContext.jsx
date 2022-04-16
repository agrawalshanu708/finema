import { useContext, createContext,useState} from "react";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
// const[openPlaylistModal,setOpenPlaylistModal] = useState(false)
const[playlists,setPlaylists] = useState([])
const [playlistName, setPlaylistName] = useState([]);

  return (
    <PlaylistContext.Provider value={{playlists,setPlaylists,
      playlistName, setPlaylistName }}>
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
