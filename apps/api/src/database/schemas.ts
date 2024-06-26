import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  address: text("address").notNull(),
  username: text("username").notNull(),
  description: text("description").notNull(),
  createdAt: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export type User = typeof users.$inferSelect;

export type CreateUser = typeof users.$inferInsert;

export const videoCategories = [
  "music",
  "travel",
  "gym",
  "boxing",
  "programming",
  "gaming",
  "ai",
] as const;

type VideoCategory = (typeof videoCategories)[number];

export const videos = sqliteTable("videos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  views: integer("views").default(0).notNull(),
  categories: text("categories", { mode: "json" })
    .notNull()
    .$type<VideoCategory[]>()
    .default(sql`(json_array())`),
  bucketUrl: text("bucket_url").notNull(),
  createdAt: text("created_at").notNull().default(sql`(current_timestamp)`),
});

export type Video = typeof videos.$inferSelect;

export type CreateVideo = typeof videos.$inferInsert;
