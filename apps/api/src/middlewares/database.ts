import { drizzle } from "drizzle-orm/d1";
import { createMiddleware } from "hono/factory";
import * as schemas from "../database/schemas";

export const databaseMiddleware = createMiddleware(async (ctx, next) => {
  ctx.set("db", drizzle(ctx.env.DB, { schema: schemas }));
  await next();
});
