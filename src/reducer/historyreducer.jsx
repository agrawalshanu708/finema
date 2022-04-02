const historyReducer = (historyState,historyAction) => {
    switch (historyAction.type) {
        case "ADD_TO_HISTORY":
    return {...historyState,
    historyItems: [ historyAction.payload, ...historyState.historyItems]
    }            
    case "REMOVE_FROM_HISTORY":
        return {...historyState,
        historyItems : historyState.historyItems.filter(item => item._id !== historyAction.payload)
        }
        default:
        return historyState
    }
}
export {historyReducer}