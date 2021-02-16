import { types } from "../Types/auth";

export function loginUser(user) {
  return {
    type: types.LOGIN_REQUEST,
    payload: user
  };
}