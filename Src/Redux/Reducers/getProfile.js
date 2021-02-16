import { types } from "../Types/getProfile";

let initialState = {

};

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        GetProfile: action.payload
      };
    case types.GET_PROFILE_FAILURE:
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

export default getProfileReducer;
