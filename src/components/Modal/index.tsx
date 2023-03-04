import React, { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import "./Modal.style.css";

interface Props {
  onClose: () => void;
  ariaLabel: string;
}

const Modal = ({ onClose, ariaLabel, children }: PropsWithChildren<Props>) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // focus on close button when component is rendered
    closeBtnRef.current?.focus();
  }, []);
  // using createPortal to render modal directly on body so it's always a top level component
  return createPortal(
    // using react-focus-lock library to prevent focus from leaving modal
    <FocusLock>
      <div
        id="modal-wrapper"
        data-testid="modal-wrapper"
        // closes modal when background is clicked
        onClick={() => onClose()}
        // closes modal when escape key is pressed
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-modal="true"
        role="dialog"
        aria-label={ariaLabel}
      >
        <div
          id="modal-content"
          data-testid="modal-content"
          // prevent parent onClick event from being triggered within modal-content
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-modal-btn"
            onClick={() => onClose()}
            aria-label="close"
            ref={closeBtnRef}
            data-testid="close-modal-btn"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </FocusLock>,
    document.body
  );
};

export default Modal;
