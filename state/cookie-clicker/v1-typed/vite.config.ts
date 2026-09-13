import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint .",
      },
    }),
  ],
  base: "/mini-web-projects/state/cookie-clicker/v1-typed/public-dist/",
  build: {
    outDir: "public-dist",
  },
});
