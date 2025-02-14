import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cocktail-api-react-router/",
  plugins: [react()],
});
