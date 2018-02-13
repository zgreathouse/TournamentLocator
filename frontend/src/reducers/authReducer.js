import { FETCH_USER } from '../actions/userActions';

const authReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
       
    default:
      return state;
  }
}

export default authReducer;
