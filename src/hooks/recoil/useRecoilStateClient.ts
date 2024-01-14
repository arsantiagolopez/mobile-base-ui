import { useState, useEffect } from "react";
import { type RecoilState, useRecoilState, type SetterOrUpdater } from "recoil";

export const useRecoilStateClient = <T>(
  state: RecoilState<T>,
  defaultValue: T
): [T, SetterOrUpdater<T>] => {
  const [isMounted, setIsMounted] = useState(false);
  const [recoilState, setRecoilState] = useRecoilState(state);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return [defaultValue, setRecoilState];
  }

  return [recoilState, setRecoilState];
};
