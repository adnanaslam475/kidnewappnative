export const allRoomsList = (state) => {
    if (state.getConversation.user_conversation.conversations) {
        {
            if (state.getConversation.user_conversation.conversations.length) {
                let roomsList = [];
                state.getConversation.user_conversation.conversations.forEach((conversation) => {
                    roomsList.push(conversation._id);
                });
                return roomsList;
            } else {
                return [];
            }
        }
    }
    else {
        if (state.getConversation.user_conversation.length) {
            let roomsList = [];
            state.getConversation.user_conversation.forEach((conversation) => {
                roomsList.push(conversation._id);
            });
            return roomsList;
        } else {
            return [];
        }
    }
}
export const selectUserConversations = (state) => {
    if (state.getConversation.user_conversation.conversations) {
        return state.getConversation.user_conversation.conversations ? state.getConversation.user_conversation.conversations : null;
    }
    else {
        return state.getConversation.user_conversation ? state.getConversation.user_conversation : null;
    }
}

export const selectfullConversation = (state, currentConversationId) => {
    if (state.getConversation.user_conversation.conversations) {
        return state.getConversation.user_conversation.conversations && state.getConversation.user_conversation.conversations.find((conversation) => conversation._id === currentConversationId);
    }
    else {
        return state.getConversation.user_conversation && state.getConversation.user_conversation.find((conversation) => conversation._id === currentConversationId);
    }
}