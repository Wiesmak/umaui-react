import { useMemo } from "react";
import type { CSSProperties } from "react";
import styles from "./Image.module.scss";

interface ImageProps {
  src: string;
  alt?: string;
  fade?: "none" | "top" | "bottom" | "left" | "right";
}

export default function Image({ src, alt = "", fade = "none" }: ImageProps) {
  const maskAngle = useMemo(() => {
    switch (fade) {
      case "right":
        return "90deg";
      case "left":
        return "270deg";
      case "bottom":
        return "180deg";
      case "top":
        return "0deg";
      default:
        return "90deg";
    }
  }, [fade]);

  const className = [styles.image, fade === "none" ? styles.nofade : null]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ "--mask-angle": maskAngle } as CSSProperties}
    />
  );
}
