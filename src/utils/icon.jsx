import { MdOutlineWatchLater,MdWatchLater } from "react-icons/md"
  const getIcon = (icon) => {
    return icon.filled ? MdWatchLater : MdOutlineWatchLater
    }

export{getIcon}