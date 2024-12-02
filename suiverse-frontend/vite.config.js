import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // The project root is now `src`
  server: {
    port: 5173, // Default Vite port
  },
});
