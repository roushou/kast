import type { Config } from "tailwindcss";

const config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
