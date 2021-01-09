import HistoryReducer from "../reducer/historyReducer";
import PayloadReducer from "../reducer/payloadReducer";
import { combineReducers } from "redux";

export default combineReducers({
  HistoryReducer,
  PayloadReducer
});
