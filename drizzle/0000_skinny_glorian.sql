CREATE TABLE `discord_users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`avatar` text,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP
);
