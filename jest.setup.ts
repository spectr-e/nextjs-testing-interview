// Makes matchers like toBeInTheDocument() available
import "@testing-library/jest-dom";
import "whatwg-fetch";

// Mock Next.js navigation hooks globally
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
