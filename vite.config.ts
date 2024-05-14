import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

const browser = process.env.TARGET || "chrome"

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // see vite-env.d.ts
    __APP_INFO__: { browser },
  },
  plugins: [
    react(),
    webExtension({
      browser,
      manifest: generateManifest,
    }),
  ],
});
