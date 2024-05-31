import { Hono } from "hono";
import { databaseMiddleware } from "./middlewares/database";
import { healthRouter } from "./routes/health";
import { usersRouter } from "./routes/users";

const app = new Hono();

app.route("/", healthRouter);

app.use("*", databaseMiddleware);

app.route("/", usersRouter);

export default app;
