import * as actioType from "./actionType";

const fetchHistory = () => {
  return {
    payload: ["history"],
    type: actioType.FETCH_HISTORY
  };
};

export default fetchHistory;
