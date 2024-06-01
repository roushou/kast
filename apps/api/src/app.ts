import { Hono } from "hono";
import { cors } from "hono/cors";
import { databaseMiddleware } from "./middlewares/database";
import { healthRouter } from "./routes/health";
import { usersRouter } from "./routes/users";

const app = new Hono();

app.use("*", cors());

app.route("/", healthRouter);

app.use("*", databaseMiddleware);

app.route("/", usersRouter);

export default app;
