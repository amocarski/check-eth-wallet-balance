import { fireEvent, render, screen } from "@testing-library/preact";
import { describe, expect, it, vi } from "vitest";
import Form from "../../form";

vi.mock("../hooks/use-wallet-balance", () => ({
  useWalletBalance: () => ({
    balance: null,
    isLoading: false,
    error: null,
    getBalance: vi.fn(),
    clearError: vi.fn(),
  }),
}));

describe("Form Component", () => {
  it("renders form elements correctly", () => {
    render(<Form />);

    expect(
      screen.getByPlaceholderText("Type ETH address...")
    ).toBeInTheDocument();
    expect(screen.getByText("Get Balance")).toBeInTheDocument();
  });

  it("handles input change", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Type ETH address...");

    fireEvent.change(input, { target: { value: "0x123" } });
    expect(input.value).toBe("0x123");
  });

  // here should be test cases for testing useWalletBalance hook, but had some issues with it
});
