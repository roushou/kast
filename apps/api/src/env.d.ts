import type { DrizzleD1Database } from "drizzle-orm/d1";
import type * as schemas from "./database/schemas";

declare module "hono" {
  interface Env {
    Bindings: {
      DB: D1Database;
    };
    Variables: {
      db: DrizzleD1Database<typeof schemas>;
    };
  }
}
