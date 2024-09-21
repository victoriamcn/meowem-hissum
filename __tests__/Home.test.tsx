import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("should render properly", () => {
	it("should contain the text", () => {
		render(<Home />); // ARRANGE

		const headingEl = screen.getByRole("heading", { // ACTION
			name: /Meowem Hissum/i,
		});

		expect(headingEl).toBeInTheDocument(); // ASSERT
	});
});

it("should contain the text 'Meowem Hissum'", () => {
  render(<Home />); // ARRANGE

  const headingEl = screen.getByText(/Form Here/i, {
    selector: "p",
  }); // ACTION

  expect(headingEl).toBeInTheDocument(); // ASSERT
});
