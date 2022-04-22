import { SmallModal } from "../components/index";

const storeReducer = (storeState, storeAction) => {
  switch (storeAction.type) {
    case "FETCH_DATA":
      return {
        ...storeState,
        storeItems: [...storeState.storeItems, ...storeAction.payload],
      };
   

    default:
      return storeState;
  }
};
export { storeReducer };
