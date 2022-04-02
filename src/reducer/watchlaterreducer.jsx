const watchLaterReducer = (watchLaterState,watchLaterAction) => {
    switch (watchLaterAction.type) {
        case "ADD_TO_WATCH_LATER":
   return {...watchLaterState, 
  watchLaterItems: [...watchLaterState.watchLaterItems, watchLaterAction.payload]
}   
    case "REMOVE_FROM_WATCH_LATER":
      return {...watchLaterState,
     watchLaterItems : watchLaterState.watchLaterItems.filter(item => item._id !== watchLaterAction.payload) 
    }  
default:
            return watchLaterState
    
}}
export{watchLaterReducer}