import { types } from "../Types/updateProfile";

let initialState = {

};

const updateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileUpdated: action.payload
      };
    case types.UPDATE_PROFILE_FAILURE:
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

export default updateProfileReducer;
