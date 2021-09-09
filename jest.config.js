/**
 * @format
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/the-coding-interview-bootcamp/completed_exercises/",
    "<rootDir>/src/the-coding-interview-bootcamp/exercises/",
  ],
};
