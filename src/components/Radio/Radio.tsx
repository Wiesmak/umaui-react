import type { ReactNode } from "react";
import styles from "./Radio.module.scss";

interface RadioProps {
  caption?: string;
  value?: string | number | null;
  modelValue?: string | number | null;
  onChange?: (value: string | number | null) => void;
  children?: ReactNode;
}

export default function Radio({
  caption = "",
  value = null,
  modelValue = null,
  onChange,
  children,
}: RadioProps) {
  const labelText = children ?? caption;
  const isChecked = modelValue === value;

  return (
    <label className={styles.container}>
      <input
        type="radio"
        name="radio"
        value={value ?? ""}
        className={styles.input}
        checked={isChecked}
        onChange={() => onChange?.(value)}
      />
      <span className={styles.control} />
      <span className={styles.labelText}>{labelText}</span>
    </label>
  );
}
