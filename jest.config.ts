import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  // Use jsdom to simulate a browser environment
  testEnvironment: "jest-environment-jsdom",

  // Run this file before each test suite
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Alias '@/' to your app directory
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
  },

  // Collect coverage from these files
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/*.d.ts",
    "!app/layout.tsx",
  ],
};

export default createJestConfig(config);
