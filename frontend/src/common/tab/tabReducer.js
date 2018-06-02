const INITIAL_STATE = { selected: "", visible: {} };

// reducer que chama a action
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAB_SELECTED":
      return { ...state, selected: action.payload };
    case "TAB_SHOWED":
      return { ...state, visible: action.payload };
    default:
      return state;
  }
};
