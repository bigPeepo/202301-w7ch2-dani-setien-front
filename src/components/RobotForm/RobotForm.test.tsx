import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import RobotForm from "./RobotForm";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an label with an aria-label text 'Robot name'", () => {
      const ariaLabelText = "name";

      render(
        <Wrapper>
          <RobotForm />
        </Wrapper>
      );

      const expectedText = screen.getByLabelText(ariaLabelText);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create Robot'", () => {
      const buttonText = "Create Robot";

      render(
        <Wrapper>
          <RobotForm />
        </Wrapper>
      );

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
