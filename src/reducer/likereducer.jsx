const likeReducer = (likeState,likeAction) => {
    switch (likeAction.type) {
        case "ADD_TO_LIKE":
 return {...likeState, 
  likeItems : [...likeState.likeItems, likeAction.payload]
}            
     case "REMOVE_FROM_LIKE":
    return {...likeState, 
    likeItems :  likeState.likeItems.filter(item => item._id !== likeAction.payload )     

    }
    default:
            return likeState
    }
}
export{likeReducer}