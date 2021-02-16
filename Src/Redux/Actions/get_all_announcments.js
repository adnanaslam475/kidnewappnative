import { types } from "../Types/get_all_announcments";

export function getAllAnnouncments(user) {
  return {
    type: types.GET_ANNOUNCEMENT_REQUEST,
    payload: user
  };
} 