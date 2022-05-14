import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    currentUser: undefined,
    authenticated: false,
  },
});
