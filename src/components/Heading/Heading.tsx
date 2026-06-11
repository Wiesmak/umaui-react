import type { CSSProperties, ReactNode } from "react"
import styles from "./Heading.module.scss";

interface HeadingProps {
  width?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  children?: ReactNode;
}

export default function Heading({
  width = '100%',
  backgroundColor = '#79ca0b',
  textColor = '#ffffff',
  className,
  children
}: HeadingProps) {
  const combinedClassName = [styles.heading, className].filter(Boolean).join(' ');

  return <div className={combinedClassName} style={{
    '--width': width,
    '--background-color': backgroundColor,
    '--text-color': textColor
  } as CSSProperties}>
    {children}
  </div>;
}
