import type { Config } from "jest";
import nextJest from "next/jest";
import { defaults } from "jest-config";

/** @type {import('ts-jest').JestConfigWithTsJest} **/
const createJestConfig = nextJest({
	dir: "./",
});

/** @type {import('jest').Config} **/
const config: Config = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jest-environment-jsdom",
	preset: "ts-jest",
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
};

module.exports = createJestConfig(config);
