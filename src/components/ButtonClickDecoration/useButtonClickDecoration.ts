import { useCallback, useState } from "react";

export function useButtonClickDecoration() {
  const [showDecoration, setShowDecoration] = useState(false);

  const triggerDecoration = useCallback(() => {
    setShowDecoration((current) => {
      if (current) {
        setTimeout(() => setShowDecoration(true), 0);
        return false;
      }
      return true;
    });
  }, []);

  return {
    showDecoration,
    setShowDecoration,
    triggerDecoration,
  };
}
