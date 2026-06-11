import type { MouseEvent, ReactNode } from "react";
import styles from "./DialogChoice.module.scss";
import ButtonClickDecoration from "../ButtonClickDecoration/ButtonClickDecoration";
import { useButtonClickDecoration } from "../ButtonClickDecoration/useButtonClickDecoration";
import Cleat from "../Icons/Cleat";

interface DialogChoiceProps {
  color?: "green" | "yellow" | "pink";
  label?: string;
  image?: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function DialogChoice({
  color = "green",
  label = "",
  image,
  children,
  onClick,
}: DialogChoiceProps) {
  const { showDecoration, setShowDecoration, triggerDecoration } =
    useButtonClickDecoration();
  const content = children ?? label;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    triggerDecoration();
    onClick?.(event);
  }

  return (
    <button
      className={[
        styles["uma-dialog-choice"],
        styles[color],
        image ? styles["uma-dialog-choice-image"] : "",
      ].join(" ")}
      onClick={handleClick}
    >
      <span className={styles.overlay} />
      <span className={styles.inner}>
        {image ? (
            <span className={styles.image}>{image}</span>
        ) : null}

        <Cleat width="1.562rem" className={styles.icon} />

        <span className={styles.text}>{content}</span>

        <span className={styles.decoration}>
          <span className={styles["decoration-front"]}>
            <span />
          </span>
          <span className={styles["decoration-back"]}>
            <span />
          </span>
        </span>
      </span>

      <span>
        <ButtonClickDecoration
          showDecoration={showDecoration}
          onShowDecorationChange={setShowDecoration}
          primary
        />
      </span>
    </button>
  );
}
