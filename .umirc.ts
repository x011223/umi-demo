import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  headScripts: [
    {
      src: "https://fe-cloud.uni-ubi.com/other/1693880180903-father-demo.min.js",
    },
  ],
});
