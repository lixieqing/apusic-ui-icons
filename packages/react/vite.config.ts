import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import dts from "vite-plugin-dts";

// 基础配置：设置构建环境和输出格式
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ApusicUIIcons",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 在 package.json 中自动声明 types 字段
      outDir: "dist", // 声明文件的输出目录
    }),
    terser({
      compress: {
        defaults: false,
        drop_console: true,
      },
      mangle: {
        eval: true,
        module: true,
        toplevel: true,
        safari10: true,
        properties: false,
      },
      output: {
        comments: false,
        ecma: "2020",
      },
    }),
  ],
});
