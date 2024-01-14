import { useState, useEffect } from "react";
import { type RecoilState, useRecoilValue } from "recoil";

export const useRecoilValueClient = <T>(
  state: RecoilState<T>,
  defaultValue: T
): T => {
  const [isMounted, setIsMounted] = useState(false);
  const recoilState = useRecoilValue(state);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return !isMounted ? defaultValue : recoilState;
};
