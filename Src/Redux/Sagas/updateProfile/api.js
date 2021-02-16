import * as CONSTANTS from '../../../Constants';

export function* updateprofile(user, id) {
  const opt = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/user/profile/update/${id}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}