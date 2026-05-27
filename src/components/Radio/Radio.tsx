import type { InputHTMLAttributes, ReactNode } from "react"
import styles from "./Radio.module.scss";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  caption?: string;
  value?: string | number | null;
  checked?: boolean;
  onChange?: (value: string | number | null) => void;
  children?: ReactNode;
}

export default function Radio({
  caption = "",
  value = null,
  checked = false,
  onChange,
  children,
  name,
  ...rest
}: RadioProps) {
  const labelText = children ?? caption;

  return (
    <label className={styles.container}>
      <input
        type="radio"
        name={name}
        value={value ?? ""}
        className={styles.input}
        checked={checked}
        {...rest}
        onChange={() => onChange?.(value)}
      />
      <span className={styles.control} />
      <span className={styles.labelText}>{labelText}</span>
    </label>
  );
}
