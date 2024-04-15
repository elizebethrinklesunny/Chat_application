export const actionType = {
  CHAT_HISTORY: "CHAT_HISTORY",
  CHAT_HISTORY_SUCCESS: "CHAT_HISTORY_SUCCESS",
  CHAT_HISTORY_ERROR: "CHAT_HISTORY_ERROR",


}
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RESET_INPUT_MSG = 'RESET_INPUT_MSG';


export const chat = (payload) => {
  return {
    type: actionType.CHAT_HISTORY,
    payload,
  };
};

export const chatSuccess = (payload) => {
  return {
    type: actionType.CHAT_HISTORY_SUCCESS,
    payload,
  };
};

export const chatError = (payload) => {
  return {
    type: actionType.CHAT_HISTORY_ERROR,
    payload,
  };
};

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const resetInputMsg = () => ({
  type: RESET_INPUT_MSG,
});