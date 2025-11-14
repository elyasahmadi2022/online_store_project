import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import useClickOutside from "../../context/useClickOutside";

function Modal({ isOpen, onClose, children }) {
  const ref = useClickOutside(() => onClose());
  if (!isOpen) return null;
  return createPortal(
    <div ref={ref} className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      {children}
    </div>,
    document.body
  );
}

export default Modal;
