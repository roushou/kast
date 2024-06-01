import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  address: text("address").notNull(),
  username: text("username").notNull(),
  description: text("description").notNull(),
  createdAt: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export type User = typeof users.$inferSelect;
