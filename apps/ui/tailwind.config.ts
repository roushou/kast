import type { Config } from "tailwindcss";

const config = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./error.vue",
  ],
  theme: {},
} satisfies Config;

export default config;
