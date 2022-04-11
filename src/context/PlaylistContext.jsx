import { useContext, createContext } from "react";

const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {

  return (
    <PlaylistContext.Provider value={{  }}>
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
