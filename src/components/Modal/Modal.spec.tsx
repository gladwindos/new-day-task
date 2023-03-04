import React from "react";
import { render } from "@testing-library/react";

import Modal from ".";

it("renders modal with correct content", () => {
  const { getByText, getByLabelText } = render(
    <Modal ariaLabel="I'm a label" onClose={() => false}>
      <p>I'm a modal</p>
    </Modal>
  );

  expect(getByText("I'm a modal")).toBeTruthy();
  // expect(getByLabelText("I'm a label")).toBeTruthy();
});

// it("focuses on close button on render", () => {
//   const { queryByTestId } = render(
//     <Modal ariaLabel="I'm a label" onClose={() => false}>
//       <p>I'm a modal.</p>
//     </Modal>
//   );

//   expect(queryByTestId("close-modal-btn")).toHaveFocus();
// });
