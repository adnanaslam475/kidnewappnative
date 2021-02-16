
import * as CONSTANTS from '../../../Constants';

export function* getAnnouncementApi() {
  const opt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/information/announcment/show`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}