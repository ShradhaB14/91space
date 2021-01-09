import * as actionType from "./actionType";

const fetchPayload = () => {
  return {
    payload: ["payload"],
    type: actionType.FETCH_PAYLOAD
  };
};

export default fetchPayload;
