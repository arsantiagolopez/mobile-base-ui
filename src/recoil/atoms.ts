import { atom } from "recoil";
import { persistInLocalStorage } from "./effects";

export const DEFAULT_LOGIN_STATE = false;

export const loginState = atom({
  key: "loginState",
  default: DEFAULT_LOGIN_STATE,
  effects: [persistInLocalStorage("loginState")],
});

export const onboardingState = atom({
  key: "onboardingState",
  default: true,
});
