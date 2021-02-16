import { types } from "../Types/get_user_conversations";

let initialState = {
  messages: [],
  user_conversation:[]
};

const getUserConversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_CONVERSATION_REQUEST:
      return {
        ...state,
        loading_conversation: true
      };
    case types.GET_USER_CONVERSATION_SUCCESS:
      return {
        ...state,
        loading_conversation: false,
        user_conversation: action.payload
      };
    case types.GET_USER_CONVERSATION_FAILURE:
      return {
        ...state,
        error: true,
        loading_conversation: false,
        errorMessage: action.payload.message
      };
      case types.ADD_MESSAGE:
        return {
            ...state,
            user_conversation: action.payload
        }
    case types.ADD_CURRENT_CONVERSATION_ID:
      return {
        ...state,
        currentConversationId: action.payload,
      }
    case types.FAILED_TO_SELECT_CONVERSATION:
      return {
        ...state,
      }

    default: {
      return { ...state };
    }
  }
};

export default getUserConversationsReducer;
