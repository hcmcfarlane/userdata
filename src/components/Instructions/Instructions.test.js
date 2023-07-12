import { render, screen } from "@testing-library/react";
import Instructions from "./Instructions";

describe("Instructions:", () => {
  it("should display the instructions", () => {
    render(<Instructions />);
    const heading = screen.getByRole("heading", { name: "Task" });
    expect(heading).toBeVisible();
  });
});
