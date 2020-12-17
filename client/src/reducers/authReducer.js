import { FETCH_USER, UPDATE_USER } from '../actions/types'

const User = function(state = null, action) {
    // console.log(action)
    switch (action.type) {
        case FETCH_USER:
          return action.payload || false;
        case UPDATE_USER:
          return action.payload || false;
        default:
          return state;
    }
} 

export default User;