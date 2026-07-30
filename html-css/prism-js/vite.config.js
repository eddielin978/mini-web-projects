import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { prismjsPlugin } from "vite-plugin-prismjs";

export default defineConfig({
  plugins: [
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./scripts/**/*.{js,ts,jsx,tsx}"',
      },
    }),
    prismjsPlugin({
      languages: ["javascript", "css", "markup"],
      plugins: ["line-numbers"],
      theme: "tomorrow",
      css: true,
    }),
  ],
});
