const filterReducer = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "FILTER_BY":
 return {...filterState,
  filterBy: filterAction.payload
}

    default:
     return filterState;
  }
};
export { filterReducer };
