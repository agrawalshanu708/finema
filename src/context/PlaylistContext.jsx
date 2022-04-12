import { useContext, createContext,useState} from "react";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
const[openPlaylistModal,setOpenPlaylistModal] = useState(false)
  return (
    <PlaylistContext.Provider value={{ openPlaylistModal,setOpenPlaylistModal }}>
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
