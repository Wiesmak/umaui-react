import type { ReactNode } from "react";
import styles from "./Table.module.scss";

interface TableProps {
  orientation?: "vertical" | "horizontal";
  dashed?: boolean;
  children?: ReactNode;
}

export default function Table({
  orientation = "vertical",
  dashed = false,
  children,
}: TableProps) {
  const className = [
    dashed ? styles.dashed : null,
    styles.table,
    styles[orientation],
  ]
    .filter(Boolean)
    .join(" ");

  return <table className={className}>{children}</table>;
}
