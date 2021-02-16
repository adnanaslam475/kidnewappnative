import * as CONSTANTS from '../../../Constants';

export function* getconversationAPI(id) {
  const opt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/messages/conversations?` + new URLSearchParams({
    userId: id
  }), opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}

export function* addFeedbackForConversationApi(user) {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/analytics/enter-thumbs`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}