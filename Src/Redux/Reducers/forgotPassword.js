import { types } from "../Types/forgotPassword";

let initialState = {

};

const forgotReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FORGOT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FORGOT_SUCCESS:
      return {
        ...state,
        loading: false,
        fogotSucces: action.payload
      };
    case types.FORGOT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.payload.message
      };
    default: {
      return { ...state };
    }
  }
};

export default forgotReducer;
