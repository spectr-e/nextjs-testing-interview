import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  // Use jsdom to simulate a browser environment
  testEnvironment: "jest-environment-jsdom",

  // Run this file before the test framework is installed (polyfills)
  setupFiles: ["<rootDir>/jest.polyfills.ts"],

  // Run this file after the test framework is installed
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

// Wrap the config to patch next/jest's transformIgnorePatterns
// so that msw and @mswjs ESM packages get transformed
const jestConfigAsync = createJestConfig(config);

const makeConfig = async () => {
  const jestConfig = await jestConfigAsync();

  // Override next/jest's transformIgnorePatterns to also allow
  // MSW and its ESM dependencies through the transformer
  jestConfig.transformIgnorePatterns = [
    "/node_modules/(?!(msw|@mswjs|@bundled-es-modules|@open-draft|until-async)/).*/",
    "^.+\\.module\\.(css|sass|scss)$",
  ];

  return jestConfig;
};

export default makeConfig;
