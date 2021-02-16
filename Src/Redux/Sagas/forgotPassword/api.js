import * as CONSTANTS from '../../../Constants';

export function* forgot(user) {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/user/forgot-password`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}