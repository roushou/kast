ALTER TABLE `videos` ADD `views` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `videos` ADD `categories` text DEFAULT (json_array()) NOT NULL;