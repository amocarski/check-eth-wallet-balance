import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock fetch if needed
global.fetch = vi.fn();
