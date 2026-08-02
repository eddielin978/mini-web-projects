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
      languages: ["javascript", "css", "markup", "java"],
      plugins: ["line-numbers"],
      theme: "tomorrow",
      css: true,
    }),
  ],
  base: "/mini-web-projects/library-pkg/prism-js/v1/dist/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        htmlGuide: "pages/html.html",
        cssGuide: "pages/css.html",
        jsGuide: "pages/js.html",
        javaGuide: "pages/java.html",
      },
    },
  },
});
