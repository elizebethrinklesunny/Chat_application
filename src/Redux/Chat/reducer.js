import { actionType,ADD_MESSAGE, RESET_INPUT_MSG } from "./action";
export const InitialState = {
  historychat: "",
  messages: [],
  inputMsg: '',
 
  
};

const ChatReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CHAT_HISTORY:
      return { ...state, historychat: "" };
  case actionType.CHAT_HISTORY_SUCCESS:
      return { ...state, historychat: action.payload };
  case actionType.CHAT_HISTORY_ERROR:
      return { ...state, historychat: "error" };

      case ADD_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      case RESET_INPUT_MSG:
        return {
          ...state,
          inputMsg: '',
        };
     

    default:
      return state;
  }
};
export default ChatReducer;