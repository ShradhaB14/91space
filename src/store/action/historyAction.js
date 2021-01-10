import * as actioType from "./actionType";

export const fetchHistory = () => {
  return {
    payload: [],
    type: actioType.FETCH_HISTORY
  };
};
