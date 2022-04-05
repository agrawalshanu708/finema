import { SmallModal } from "../components/index";

const storeReducer = (storeState, storeAction) => {
  switch (storeAction.type) {
    case "FETCH_DATA":
      return {
        ...storeState,
        storeItems: [...storeState.storeItems, ...storeAction.payload],
      };
    case "SMALL_MODAL":
      return {
        ...storeState,
        storeItems: storeState.storeItems.map((item) =>
          item._id === storeAction.payload
            ? {
                ...item,
                modal: !item.modal,
              }
            : item
        ),
      };

    case "MODAL":
      return { ...storeState, modal: !storeState.modal };

    default:
      return storeState;
  }
};
export { storeReducer };
