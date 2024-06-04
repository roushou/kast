# Kast API

This is the HTTP server built using [Cloudflare Workers](https://workers.cloudflare.com) and [Hono](https://hono.dev).

## Getting started

Generate database migrations

```sh
$ bun db:generate
```

Create database tables

```sh
$ bun db:migrate
```

Seed database

```sh
$ bun db:seed
```

Launch HTTP server

```sh
$ bun dev
```
