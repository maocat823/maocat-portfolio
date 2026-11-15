import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite 配置：React 插件 + Tailwind CSS v4 插件
// 文档：https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
