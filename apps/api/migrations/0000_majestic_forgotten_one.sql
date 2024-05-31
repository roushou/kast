CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`description` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
