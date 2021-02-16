import { types } from "../Types/get_learn_more";

let initialState = {

};

const getLearnMoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LEARN_MORE_REQUEST:
      return {
        ...state,
        loading_learn: true
      };
    case types.LEARN_MORE_SUCCESS:
      return {
        ...state,
        loading_learn: false,
        lean_more: action.payload
      };
    case types.LEARN_MORE_FAILURE:
      return {
        ...state,
        error: true,
        loading_learn: false,
        errorMessage: action.payload.message
      };
    default: {
      return { ...state };
    }
  }
};

export default getLearnMoreReducer;
