import { render, screen } from "@testing-library/react";
import Card from "./Card";

const mockUser = {
  id: 1,
  colour: "MediumOrchid",
  image: "http://dummyimage.com/200x200.png/ff4444/ffffff",
  name: "Hannah",
  ranking: "50",
};

describe("Card:", () => {
  it("should display correct properties", () => {
    render(
      <Card
        colour={mockUser.colour}
        image={mockUser.image}
        name={mockUser.name}
        ranking={mockUser.ranking}
      />
    );

    const name = screen.getByRole("heading", { name: /hannah/i });
    expect(name).toBeVisible();

    const borderDiv = screen.getByTestId("border-div");
    expect(borderDiv).toHaveStyle(`borderColor: "${mockUser.colour}"`);

    const img = screen.getByRole("img");
    expect(img).toBeVisible();
    expect(img).toHaveAttribute("src", mockUser.image);

    const ranking = screen.getByText("50");
    expect(ranking).toBeVisible();

    const indicator = screen.getByTestId("indicator");
    expect(indicator).toHaveTextContent("+");
  });
});
