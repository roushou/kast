import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: "d1-http",
  dialect: "sqlite",
  schema: "./src/database/schemas.ts",
  out: "./migrations",
});
