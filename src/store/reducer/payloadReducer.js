import * as type from '../action/actionType';

const initialState = {
  payloadList = []
}

const payloadReducer = (state = initialState, action) => {

  switch(action.type) {

    case type.FETCH_PAYLOAD:
    console.log('From payload', action);
    break;
    
    default: return state;
  }
}

export default payloadReducer;