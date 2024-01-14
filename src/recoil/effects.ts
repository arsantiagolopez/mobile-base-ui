import type { AtomEffect } from "recoil";

/**
 * Creates a persistent state effect for a Recoil atom.
 * This effect synchronizes the atom's state with the local storage.
 *
 * @param {string} key - The key under which to store the atom's state in local storage.
 * @returns {AtomEffect<T>} - An AtomEffect that can be used in a Recoil atom to manage persistence.
 * @template T - The type of the atom's value.
 */
export const persistInLocalStorage = <T>(key: string): AtomEffect<T> => {
  return ({ onSet, setSelf }) => {
    if (typeof window !== "undefined") {
      // Load saved state from local storage on initialization
      const savedValue = localStorage.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue) as T);
      }

      // Persist new state changes to local storage
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
};
