import { useState } from "react";
import styles from "./Tabs.module.scss";

interface TabsProps {
  items: Array<{ label: string; value: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  function handleClick(nextValue: string) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  }

  return (
    <div className={styles["button-group"]}>
      {items.map((item) => (
        <button
          key={item.value}
          className={[
            styles.button,
            item.value === selectedValue ? styles.active : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => handleClick(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
