import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  title?: string;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
  footer?: ReactNode;
}

type AnimationState = "enter" | "leave" | null;

export default function Modal({
  title = "",
  closeOnEscape = true,
  closeOnClickOutside = true,
  open,
  defaultOpen = false,
  onOpenChange,
  children,
  footer,
}: ModalProps) {
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [delayedOpen, setDelayedOpen] = useState(
    isControlled ? Boolean(open) : internalOpen
  );
  const [animationState, setAnimationState] = useState<AnimationState>(null);

  const isOpen = isControlled ? open : internalOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );

  const closeModal = useCallback(() => {
    if (!isOpen) return;
    setOpen(false);
  }, [isOpen, setOpen]);

  const closeModalOnEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        closeModal();
      }
    },
    [closeModal, closeOnEscape]
  );

  useEffect(() => {
    if (isOpen) {
      setDelayedOpen(true);
      setAnimationState("enter");
      const enterTimeout = setTimeout(() => setAnimationState(null), 100);
      document.addEventListener("keydown", closeModalOnEscape);
      return () => {
        clearTimeout(enterTimeout);
        document.removeEventListener("keydown", closeModalOnEscape);
      };
    }

    document.removeEventListener("keydown", closeModalOnEscape);
    setAnimationState("leave");
    const timeout = setTimeout(() => {
      setDelayedOpen(false);
      setAnimationState(null);
    }, 100);

    return () => clearTimeout(timeout);
  }, [isOpen, closeModalOnEscape]);

  const modalClassName = useMemo(
    () =>
      [
        styles.modal,
        animationState === "enter" ? styles["show-modal-enter-active"] : null,
        animationState === "leave" ? styles["show-modal-leave-active"] : null,
      ]
        .filter(Boolean)
        .join(" "),
    [animationState]
  );

  const backdropClassName = useMemo(
    () =>
      [
        styles.backdrop,
        animationState === "leave" ? styles["focus-leave-active"] : null,
      ]
        .filter(Boolean)
        .join(" "),
    [animationState]
  );

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget && closeOnClickOutside) {
      closeModal();
    }
  }

  if (!delayedOpen) return null;

  return createPortal(
    <>
      <div className={backdropClassName} />
      <div className={modalClassName} onClick={handleBackdropClick}>
        <div className={styles.container}>
          <div className={styles.title}>{title}</div>
          <div
            className={[
              styles.content,
              animationState === "enter" ? styles["content-enter-active"] : null,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {children}
          </div>
          {footer ? (
            <div
              className={[
                styles.footer,
                animationState === "enter" ? styles["footer-enter-active"] : null,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </>,
    document.body
  );
}
