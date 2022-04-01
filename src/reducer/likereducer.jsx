const likeReducer = (likeState,likeAction) => {
    switch (likeAction.type) {
        case "ADD_TO_LIKE":
 return {...likeState, 
  likedItems : [...likeState.likedItems, likeAction.payload]
}            
    
        default:
            return likeState
    }
}
export{likeReducer}