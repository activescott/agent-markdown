module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./tests/support/setup.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.es.json"
    }
  }
}
