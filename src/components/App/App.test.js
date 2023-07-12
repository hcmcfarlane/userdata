import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App:", () => {
  it("should display app title", () => {
    render(<App />);
    const title = screen.getByText(/user data/i);
    expect(title).toBeVisible();
  });
});
