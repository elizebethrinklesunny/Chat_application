export const actionType = {
  CHAT_HISTORY: "CHAT_HISTORY",
  CHAT_HISTORY_SUCCESS: "CHAT_HISTORY_SUCCESS",
  CHAT_HISTORY_ERROR: "CHAT_HISTORY_ERROR",


};

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

