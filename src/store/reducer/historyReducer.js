import * as type from "../action/actionType";
const initialState = {
  historyList: []
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_HISTORY:
      return {
        ...state,
        historyList: [...action.payload]
      };

    default:
      return state;
  }
};

export default historyReducer;
