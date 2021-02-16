import { types } from "../Types/updateProfile";

export function updateUser(user) {
  return {
    type: types.UPDATE_PROFILE_REQUEST,
    payload: user
  };
}