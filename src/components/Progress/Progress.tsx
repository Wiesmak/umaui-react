import styles from "./Progress.module.scss";

interface ProgressProps {
  min?: number;
  max?: number;
  value?: number;
  showProgressText?: boolean;
}

export default function Progress({
  min = 0,
  max = 100,
  value,
  showProgressText = false,
}: ProgressProps) {
  return (
    <div>
      <progress
        className={styles.progress}
        max={max}
        value={value}
        aria-valuemin={min}
      />
      {showProgressText ? (
        <div className={styles["progress-text"]}>
          {value}/{max}
        </div>
      ) : null}
    </div>
  );
}
