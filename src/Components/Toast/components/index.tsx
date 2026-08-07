import { type FC, type MouseEvent, useCallback } from "react";
import { gettext } from "@/Components/Language/index.js";
import { Portal } from "@/Components/Utils/components/portal.js";
import styles from "./index.module.scss";
import { useToastStore } from "./store.js";
export const Toast: FC = () => {
  const isOpen = useToastStore((s) => s.isOpen);
  const msg = useToastStore((s) => s.msg);
  const close = useToastStore((s) => s.close);
  const handleClose = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      close();
    },
    [close]
  );
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <button
        className={styles.main}
        onClick={handleClose}
        title={gettext("Click to close")}
        type="button"
      >
        {msg}
      </button>
    </Portal>
  );
};
