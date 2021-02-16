import { types } from "../Types/get_all_announcments";

let initialState = {

};

const getAnnouncmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ANNOUNCEMENT_REQUEST:
      return {
        ...state,
        loading_Announcment: true
      };
    case types.GET_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        loading_Announcment: false,
        get_Announcment: action.payload
      };
    case types.GET_ANNOUNCEMENT_FAILURE:
      return {
        ...state,
        error: true,
        loading_Announcment: false,
        errorMessage: action.payload.message
      };
    default: {
      return { ...state };
    }
  }
};

export default getAnnouncmentReducer;
