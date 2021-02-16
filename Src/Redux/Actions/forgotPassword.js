import { types } from "../Types/forgotPassword";

export function forgotUser(user) {

  return {
    type: types.FORGOT_REQUEST,
    payload: user
  };
}