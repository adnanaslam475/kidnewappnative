import { types } from "../Types/getProfile";

export function getProfile(user) {
  return {
    type: types.GET_PROFILE_REQUEST,
    payload: user
  };
}