import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const discordUsers = sqliteTable("discord_users", {
    id: text("id").primaryKey(),
    username: text("username").notNull(),
    avatar: text("avatar"),
    createdAt: integer("created_at", { mode: "timestamp" })
        .default(sql`CURRENT_TIMESTAMP`)
});

export const user = sqliteTable("user", {
    id: text("id").primaryKey(),
    username: text("username").notNull(),
    avatarUrl: text("avatar_url")
});

export const session = sqliteTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
});