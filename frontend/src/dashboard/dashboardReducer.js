const INITIAL_STATE = { summary: { credito: 0, debito: 0 } };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_CICLO_SUMMARY":
      return { ...state, summary: action.payload.data };
    default:
      return state;
  }
}
