import { types } from "../Types/auth";

let initialState = {

};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loginError: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedInStatus: true,
        loading: false,
        loginError: null,
        token: action.payload.token
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loggedInStatus: false,
        loading: false,
        loginError: action.payload.message,
      };
    default: {
      return { ...state };
    }
  }
};

export default authReducer;