CREATE TABLE `videos` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`bucket_url` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
