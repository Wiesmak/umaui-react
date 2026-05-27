import { useState } from "react";
import type { ChangeEvent } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url";
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string) => void;
}

export default function Input({
  type = "text",
  value,
  defaultValue = "",
  onChange,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value;
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  }

  return (
    <input
      type={type}
      className={styles.input}
      value={isControlled ? value : internalValue}
      onChange={handleChange}
    />
  );
}
