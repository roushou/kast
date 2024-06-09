import { Hono } from "hono";
import { cors } from "hono/cors";
import { databaseMiddleware } from "./middlewares/database";
import { healthRouter } from "./routes/health";
import { usersRouter } from "./routes/users";
import { videosRouter } from "./routes/videos";

const app = new Hono();

app.use("*", cors());

app.route("/", healthRouter);

app.use("*", databaseMiddleware);

app.route("/", usersRouter).route("/", videosRouter);

export default app;
