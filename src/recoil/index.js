import { atom, selector } from "recoil";
import { requestGetCurrentUser } from "../api";

export const userState = atom({
  key: "userState",
  default: {
    currentUser: undefined,
    authenticated: false,
  },
});

export const getCurrentUserSelector = selector({
  key: "user/me",
  get: async () => {
    const response = await requestGetCurrentUser();
    return response.data;
  },
  set: ({ set }, newValue) => {
    set(userState.currentUser, newValue);
    set(userState.authenticated, true);
  },
});
