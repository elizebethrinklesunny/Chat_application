import { actionType } from "./action";
export const InitialState = {
  historychat: "",
 
  
};

const SaleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CHAT_HISTORY:
      return { ...state, historychat: "" };
  case actionType.CHAT_HISTORY_SUCCESS:
      return { ...state, historychat: action.payload };
  case actionType.CHAT_HISTORY_ERROR:
      return { ...state, historychat: "error" };


     

    default:
      return state;
  }
};
export default SaleReducer;