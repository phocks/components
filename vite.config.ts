import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/main.ts"],
      fileName: (format, entryName) => `my-lib-${entryName}.${format}.js`,
      cssFileName: "my-lib-style",
      name: "my-lib"
    },
  },
});
