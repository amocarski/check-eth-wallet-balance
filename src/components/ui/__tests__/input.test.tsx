import { render, screen } from "@testing-library/preact";
import { describe, expect, it } from "vitest";
import Input from "../input";

describe("Input Component", () => {
  it("renders input element correctly", () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("handles disabled state", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("handles required attribute", () => {
    render(<Input required />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeRequired();
  });
});
