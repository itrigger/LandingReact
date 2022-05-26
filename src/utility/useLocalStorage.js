import React from "react";

export const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(storageKey)) !== "undefined"
        ? JSON.parse(localStorage.getItem(storageKey))
        : []
      : fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
