import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: 'tests/setup.ts' // this runs before every test file
  },
});
