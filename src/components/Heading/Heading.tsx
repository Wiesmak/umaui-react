import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  children?: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <div className={styles.heading}>{children}</div>;
}
