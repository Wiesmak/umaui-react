import type { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.scss";
import ButtonClickDecoration from "../ButtonClickDecoration/ButtonClickDecoration";
import { useButtonClickDecoration } from "../ButtonClickDecoration/buttonClickDecoration";

interface ButtonProps {
  primary?: boolean;
  small?: boolean;
  medium?: boolean;
  label?: string;
  suppressClickDecoration?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  primary = false,
  small = false,
  medium = false,
  label = "",
  suppressClickDecoration = false,
  disabled = false,
  icon,
  children,
  onClick,
}: ButtonProps) {
  const { showDecoration, setShowDecoration, triggerDecoration } =
    useButtonClickDecoration();

  const className = [
    styles.button,
    primary ? styles.primary : null,
    medium ? styles.medium : null,
    small ? styles.small : null,
  ]
    .filter(Boolean)
    .join(" ");

  const content = children ?? label;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (!suppressClickDecoration) {
      triggerDecoration();
    }
    onClick?.(event);
  }

  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      <span className={styles.content}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <span>{content}</span>
      </span>
      <span className={styles.decoration}>
        <span className={styles["decoration-front"]} />
        <span className={styles["decoration-back"]} />
      </span>
      <span className={styles["inner-border"]} />

      {!suppressClickDecoration ? (
        <span>
          <ButtonClickDecoration
            showDecoration={showDecoration}
            onShowDecorationChange={setShowDecoration}
            primary={primary}
          />
        </span>
      ) : null}
    </button>
  );
}
