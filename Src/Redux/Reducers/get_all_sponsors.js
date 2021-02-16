import { types } from "../Types/get_all_sponsors";

let initialState = {

};

const getAllSponserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SPONSERS_REQUEST:
      return {
        ...state,
        loading_sponsers: true
      };
    case types.GET_SPONSERS_SUCCESS:
      return {
        ...state,
        loading_sponsers: false,
        get_sponsores: action.payload
      };
    case types.GET_SPONSERS_FAILURE:
      return {
        ...state,
        error: true,
        loading_sponsers: false,
        errorMessage: action.payload.message
      };
    default: {
      return { ...state };
    }
  }
};

export default getAllSponserReducer;
