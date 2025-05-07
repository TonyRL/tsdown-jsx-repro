import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.tsx"],
  minify: true,
  shims: true,
  clean: true,
  platform: "node",
});
