import * as type from "../action/actionType";

const initialState = {
  payloadList: []
};

const payloadReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_PAYLOAD:
      return {
        ...state,
        payloadList: [...action.payload]
      };

    default:
      return state;
  }
};

export default payloadReducer;
