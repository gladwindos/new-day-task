import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";
import "./styles.css";

/*

Interview Task:

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with the underlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about implementing 
the solution in a single file

Use comments to explain missing parts of the 
implementation or to explain where you stopped
and why - the more comments you leave us the
easier it will be for use to understand how you
write code :)

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

export default function App() {
  // state to handle the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);

  // ref for 'open modal' button
  const openModalBtnRef = useRef<HTMLButtonElement>(null);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    // focus set to 'open modal' button when modal is closed
    openModalBtnRef.current?.focus();
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      // prevent scroll when modal is open
      html.style.overflow = modalOpen ? "hidden" : "auto";
    }
  }, [modalOpen]);

  return (
    <div className="App">
      <h1>NewDay</h1>
      <h2>Let’s see a modal</h2>
      <button
        data-testid="open-modal-btn"
        onClick={() => handleModalOpen()}
        ref={openModalBtnRef}
      >
        Open Modal
      </button>
      {
        // show modal only when modalopen is state is true
        modalOpen && (
          <Modal ariaLabel="A modal with a message" onClose={handleModalClose}>
            <p>Hey, I'm a modal!</p>
            <button>Find out more</button>
          </Modal>
        )
      }
    </div>
  );
}
