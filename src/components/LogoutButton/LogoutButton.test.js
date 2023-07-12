import { render, screen, fireEvent } from "@testing-library/react";
import LogoutButton from "./LogoutButton";

describe("LogoutButton:", () => {
  it("should initially display 'Logout' button text", () => {
    render(<LogoutButton />);
    const button = screen.getByRole("button", { name: /logout/i });
    expect(button).toBeVisible();
  });

  it("should change text after click", () => {
    render(<LogoutButton />);
    const button = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /login/i })).toBeVisible();
  });
});
