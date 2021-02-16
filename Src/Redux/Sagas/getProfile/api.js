import * as CONSTANTS from '../../../Constants';

export function* getProfileUser(id) {
  const opt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/user/profile/${id}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}