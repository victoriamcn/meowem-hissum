import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("should render heading properly", () => {
	it("should be a header element", () => {
		render(<Home />);

		const headingEl = screen.getByRole("heading", {
			name: /Meowem Hissum/i,
		});

		expect(headingEl).toBeInTheDocument();
	});
});

describe("should render form properly", () => {
	it("should contain one textbox", () => {
		render(<Home />);

		const textbox = screen.getByRole("textbox", {
			name: /Amount/i,
		});

		// const inputType = screen.getByRole("textbox", {
		// 	name: /Type/i,
		// });

		expect(textbox).toBeInTheDocument();
		// expect(inputType).toBeInTheDocument();
	});

	it("should contain a dropdown", () => {
		render(<Home />);

		const dropdown = screen.getByRole("combobox", {
			name: /Type/i,
		});

		expect(dropdown).toBeInTheDocument();
	});

	it("should contain one button", () => {
		render(<Home />);

		const button = screen.getByRole("button", {
			name: /Generate/i,
		});

		expect(button).toBeInTheDocument();
	});
});
