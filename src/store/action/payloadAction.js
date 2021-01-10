import * as actionType from "./actionType";
import axios from "axios";

export const payloadSuccess = payload => {
  return {
    payload: payload,
    type: actionType.FETCH_PAYLOAD
  };
};

export const fetchPayload = () => {
  return async dispatch => {
    const res = await axios.get("https://api.spacexdata.com/v3/payloads");
    dispatch(payloadSuccess(res.data));
  };
};
