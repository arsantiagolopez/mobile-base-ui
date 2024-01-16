import { atom } from "recoil";
import { persistInLocalStorage } from "./effects";

export const DEFAULT_LOGIN_STATE = false;

export const loginState = atom({
  key: "loginState",
  default: DEFAULT_LOGIN_STATE,
  effects: [persistInLocalStorage("loginState")],
});

export const onboardingSlideState = atom({
  key: "onboardingSlideState",
  default: 0,
});

export const loginSlideState = atom({
  key: "loginSlideState",
  default: 0,
});

export const DEFAULT_EMAIL_STATE = "";

export const emailState = atom({
  key: "emailState",
  default: DEFAULT_EMAIL_STATE,
  effects: [persistInLocalStorage("emailState")],
});

export const DEFAULT_USERNAME_STATE = "";

export const usernameState = atom({
  key: "usernameState",
  default: DEFAULT_EMAIL_STATE,
  effects: [persistInLocalStorage("usernameState")],
});
