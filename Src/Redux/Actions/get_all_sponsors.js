import { types } from "../Types/get_all_sponsors";

export function getAllSponsors(user) {
  return {
    type: types.GET_SPONSERS_REQUEST,
    payload: user
  };
} 