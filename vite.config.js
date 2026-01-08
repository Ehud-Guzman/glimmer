import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "localhost", // ensures WS connects to localhost
    port: 5173,        // same as default, but explicit
    strictPort: true,  // fail if port is taken
    open: true,        // opens browser automatically
    hmr: {
      protocol: "ws",  // force WebSocket
      host: "localhost",
      port: 5173,
    },
  },
});
