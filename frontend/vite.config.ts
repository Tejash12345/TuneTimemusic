import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 kB
    outDir: 'dist', // The output folder is dist
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor libraries into a chunk
          }
        },
      },
    },
  },
});
