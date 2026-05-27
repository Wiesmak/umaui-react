import type { ReactNode } from "react";
import styles from "./ButtonClickDecoration.module.scss";
import ButtonClickDecorationSparkle from "./ButtonClickDecorationSparkle";

interface ButtonClickDecorationProps {
  primary?: boolean;
  showDecoration?: boolean;
  onShowDecorationChange?: (value: boolean) => void;
  children?: ReactNode;
}

export default function ButtonClickDecoration({
  primary = false,
  showDecoration = false,
  onShowDecorationChange,
}: ButtonClickDecorationProps) {
  const decorationClassName = [
    styles["click-decoration"],
    primary ? styles.primary : styles.neutral,
  ]
    .filter(Boolean)
    .join(" ");

  const sparkleClassName = styles["pop-in-enter-active"];

  return (
    <span className={decorationClassName}>
      <span className={styles.left}>
        {showDecoration ? (
          <ButtonClickDecorationSparkle
            className={sparkleClassName}
            onAnimationEnd={() => onShowDecorationChange?.(false)}
          />
        ) : null}
      </span>
      <span className={styles.right}>
        {showDecoration ? (
          <ButtonClickDecorationSparkle
            className={sparkleClassName}
            onAnimationEnd={() => onShowDecorationChange?.(false)}
          />
        ) : null}
      </span>
    </span>
  );
}
