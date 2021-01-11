import * as actioType from "./actionType";
import axios from "axios";

export const historySucess = payload => {
  return {
    payload: payload,
    type: actioType.FETCH_HISTORY
  };
};

export const fetchHistory = () => {
  return async dispatch => {
    const res = await axios.get("https://api.spacexdata.com/v3/history");
    dispatch(historySucess(res.data));
  };
};
